'use server';
// Подключение Mongoose и базы данных
import type { ClientSession, HydratedDocument } from 'mongoose';
import { dbConnect } from '@/services/db';
// Подключение файлов с моделями Mongoose
import '@/models/User';
import '@/models/Course';
import '@/models/Module';
import '@/models/Lesson';
import '@/models/Step';
// Константы
import { NEW_COURSE_DEFAULTS } from '@/constants/newCourseContent';
// Модели Mongoose
import Lesson from '@/models/Lesson';
import Step from '@/models/Step';
// Типы и интерфейсы
import type { id } from '@/types/id.type';
import type { ILesson, ILessonClient, ILessonContentClient } from '@/types/Lesson.interface';
import type { IStep, IStepClient } from '@/types/Step.interface';

/**
 * Возвращает полный урок курса по его id.
 *
 * @param lessonId - id курса.
 * @returns Урок курса.
 */
export async function getLessonFull(lessonId: id): Promise<ILessonContentClient | null> {
  const lessonClient: ILessonContentClient | null = await Lesson.findById(lessonId)
    .lean<ILessonContentClient>()
    .transform((doc) =>
      doc
        ? {
            ...doc,
            _id: doc._id.toString(),
            title: doc.title,
            moduleId: doc.moduleId.toString(),
            steps: [] as IStepClient[],
          }
        : null,
    );

  if (!lessonClient) return null;

  lessonClient.steps = await Step.find({ lessonId })
    .lean<IStepClient[]>()
    .transform((docs) =>
      docs.map((doc) => ({
        ...doc,
        _id: doc._id.toString(),
        content: doc.content,
        lessonId: doc.lessonId.toString(),
      })),
    );

  return lessonClient;
}

/**
 * Возвращает все уроки модуля по его id.
 *
 * @param id - id модуля.
 * @returns - Массив уроков модуля.
 */
export async function getLessons(id: id) {
  return Lesson.find({ module: id })
    .lean<ILessonClient[]>()
    .transform((docs) =>
      docs.map((doc) => ({
        ...doc,
        _id: doc._id?.toString(),
        moduleId: doc.moduleId.toString(),
      })),
    );
}

/**
 * Создаёт новый урок в указанном модуле.
 *
 * Если передан флаг `blankStep`, вместе с уроком будет создан
 * пустой шаг с контентом по умолчанию.
 *
 * @param lessonData - Данные нового урока.
 * @param opts - Дополнительные параметры сохранения.
 * @param [opts.session] - Сессия MongoDB для выполнения операции в транзакции.
 * @param [opts.blankStep] - Если `true`, создаёт пустой шаг с дефолтным содержимым.
 * @returns Promise, который выполняется после сохранения урока (и шага, если он создавался).
 */
export async function saveLesson(
  lessonData: ILesson,
  opts?: { session?: ClientSession; blankStep?: boolean },
): Promise<void> {
  const newLesson: HydratedDocument<ILesson> = new Lesson({
    ...lessonData,
  });

  if (opts?.blankStep) {
    const newStep: HydratedDocument<IStep> = new Step({
      lessonId: newLesson._id,
      content: NEW_COURSE_DEFAULTS.STEP_CONTENT,
    });
    await newStep.save();
  }

  await newLesson.save({ session: opts?.session });
}

/**
 * Создает новый урок в модуле и возвращает его в виде плоского JS объекта.
 *
 * @param lessonData - Данные для создания нового урока курса.
 * @param [opts] - Дополнительные параметры сохранения.
 * @param [opts.session] - Сессия MongoDB для выполнения операции в
 * транзакции.
 * @param [opts.blankStep=false] - Если `true`, создаст пустой шаг с контентом по умолчанию
 * вместе с уроком.
 * @returns Новый урок в виде плоского JS объекта.
 */
export async function saveAndReturnLesson(
  lessonData: ILesson,
  opts?: { blankStep?: boolean; session?: ClientSession },
): Promise<ILessonContentClient> {
  const newLesson: HydratedDocument<ILessonContentClient> = new Lesson({
    ...lessonData,
  });

  await newLesson.save({ session: opts?.session });

  if (opts?.blankStep) {
    const newStep: HydratedDocument<IStep> = new Step({
      lessonId: newLesson._id,
      content: NEW_COURSE_DEFAULTS.STEP_CONTENT,
    });
    await newStep.save({ session: opts?.session });

    return {
      _id: newLesson._id.toString(),
      title: newLesson.title,
      moduleId: newLesson.moduleId.toString(),
      createdAt: newLesson.createdAt?.toString(),
      steps: [
        {
          _id: newStep._id.toString(),
          lessonId: newStep.lessonId.toString(),
          content: newStep.content,
        },
      ],
    };
  }

  return {
    _id: newLesson._id.toString(),
    title: newLesson.title,
    moduleId: newLesson.moduleId.toString(),
    createdAt: newLesson.createdAt?.toString(),
    steps: [] as IStepClient[],
  };
}

/**
 * Обновляет название урока и возвращает плоский объект для клиента.
 *
 * @param lessonId - ID урока.
 * @param title - Новое название урока.
 * @returns Обновленный урок (плоский объект).
 */
export async function saveLessonTitle(lessonId: id, title: string): Promise<void> {
  await dbConnect();

  if (!title || !title.trim()) throw new Error('Название урока не может быть пустым');

  await Lesson.findOneAndUpdate(
    { _id: lessonId },
    { title: title.trim() },
    { new: true, runValidators: true },
  );
}
