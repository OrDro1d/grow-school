'use server'
// Подключение Mongoose и базы данных
import mongoose, { ClientSession, HydratedDocument } from 'mongoose'
import { dbConnect } from '@/services/db'
// Подключение файлов с моделями Mongoose
import '@/models/User'
import '@/models/Course'
import '@/models/Module'
import '@/models/Step'
// Модели Mongoose
import Lesson from '@/models/Lesson'
import Step from '@/models/Step'
// Константы
import { NEW_COURSE_DEFAULTS } from '@/constants/newCourseContent'
// Типы и интерфейсы
import { id } from '@/types/id.type'
import { IStep, IStepClient } from '@/types/Step.interface'
import { deleteCourse } from './courses'
import { revalidate } from '@/components/UI/main/MainCourses'
import { revalidatePath } from 'next/cache'

export async function getSteps(id: id): Promise<IStepClient[]> {
  const steps: IStepClient[] = await Step.find({ id })
    .lean<IStepClient[]>()
    .transform((docs) =>
      docs.map((doc) => ({
        ...doc,
        _id: doc._id.toString(),
        lessonId: doc.lessonId.toString(),
      }))
    )
  return steps
}

export async function saveStep(stepData: IStep, opts?: { session?: ClientSession }): Promise<void> {
  const newStep = new Step({
    ...stepData,
    lessonId: stepData.lessonId,
    content: stepData.content ? stepData.content : NEW_COURSE_DEFAULTS.STEP_CONTENT,
  })

  await newStep.save({ session: opts?.session })
}

/**
 * Создает новый шаг в уроке и возвращает его в виде плоского JS объекта.
 *
 * @param {IStep} stepData - Данные для создания нового шага урока.
 * @returns {IStepClient} - Новый шаг в виде плоского JS объекта.
 */
export async function saveAndReturnStep(
  stepData: IStep,
  opts?: { session: ClientSession }
): Promise<IStepClient> {
  const newStep: HydratedDocument<IStep> = new Step({
    ...stepData,
  })

  await newStep.save({ session: opts?.session })

  const newStepClient: IStepClient = {
    _id: newStep._id.toString(),
    lessonId: newStep.lessonId.toString(),
    createdAt: newStep.createdAt?.toDateString(),
  }

  return newStepClient
}

/**
 * Обновляет данные шага.
 *
 * @param {IStepClient} step - Данные шага для обновления.
 */
export async function updateStep(step: IStepClient) {
  await dbConnect()

  await Step.findOneAndUpdate(
    { _id: step._id },
    { content: step.content },
    { new: true, runValidators: true }
  )
}

/**
 * Удаляет шаг из урока.
 *
 * @param {id} stepId - id шага.
 * @param {boolean} opts.checkLesson - Удаление урока в случае, если был удален его единственный шаг.
 */

export async function deleteStep(stepId: id, opts?: { checkLesson?: boolean; pathname?: string }) {
  await mongoose.connection.transaction(async (session) => {
    const deletedStep: HydratedDocument<IStep> | null =
      await Step.findByIdAndDelete(stepId).session(session)

    if (!deletedStep) throw new Error('Шаг с переданным id не был найден.')
    // Проверка на наличие шагов у урока.
    if (opts?.checkLesson) {
      const existingSteps: HydratedDocument<IStep>[] = await Step.find({
        lessonId: deletedStep.lessonId,
      }).session(session)
      // Если у урока после удаления шага больше нет других, то удаляется и сам урок
      if (existingSteps.length === 0)
        await Lesson.findByIdAndDelete(deletedStep.lessonId).session(session)
    }
  })
}
