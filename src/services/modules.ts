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
import { NEW_COURSE_DEFAULTS } from '@/constants/newCourseContent';
// Модели Mongoose
import Lesson from '@/models/Lesson';
import Module from '@/models/Module';
import Step from '@/models/Step';
// Типы и интерфейсы
import type { id } from '@/types/id.type';
import type { ILessonContentClient } from '@/types/Lesson.interface';
import type { IModule, IModuleClient, IModuleContentClient } from '@/types/Module.interface';
import type { IStepClient } from '@/types/Step.interface';
import { saveAndReturnLesson } from './lessons';

/**
 * Возвращает модуль курса по его ID.
 *
 * @param moduleId - ID курса.
 * @returns Модуль курса.
 */
export async function getModule(moduleId: id): Promise<IModuleClient | null> {
  return Module.findById(moduleId)
    .lean<IModuleClient>()
    .transform((doc) =>
      doc
        ? {
            ...doc,
            _id: doc._id.toString(),
            title: doc.title,
            courseId: doc.courseId.toString(),
          }
        : null,
    );
}

/**
 * Возвращает полный модуль курса по его ID.
 *
 * @param moduleId - ID курса.
 * @returns Модуль курса.
 */
export async function getModuleFull(moduleId: id): Promise<IModuleContentClient> {
  const moduleClient: IModuleContentClient | null = await Module.findById(moduleId)
    .lean<IModuleContentClient>()
    .transform((doc) =>
      doc
        ? {
            ...doc,
            _id: doc?._id.toString(),
            title: doc?.title,
            courseId: doc?.courseId.toString(),
            lessons: [] as ILessonContentClient[],
          }
        : null,
    );

  if (!moduleClient) throw new Error('Модуль не был найден.');

  moduleClient.lessons = await Lesson.find({ moduleId: moduleClient._id })
    .lean<ILessonContentClient[]>()
    .transform((docs) =>
      docs.map((doc) => ({
        ...doc,
        _id: doc._id.toString(),
        title: doc.title,
        moduleId: doc.moduleId.toString(),
        steps: [] as IStepClient[],
      })),
    );

  for (const lesson of moduleClient.lessons) {
    lesson.steps = await Step.find({ lessonId: lesson._id })
      .lean<IStepClient[]>()
      .transform((docs) =>
        docs.map((doc) => ({
          ...doc,
          _id: doc._id.toString(),
          content: doc.content,
          lessonId: doc.lessonId.toString(),
        })),
      );
  }
  return moduleClient;
}

/**
 * Возвращает все модули курса по его ID.
 *
 * @param courseId - ID курса.
 * @returns Массив модулей курса.
 */
export async function getModules(courseId: id): Promise<IModuleClient[]> {
  return Module.find({ courseId })
    .lean<IModuleClient[]>()
    .transform((docs) =>
      docs.map((doc) => ({
        ...doc,
        _id: doc._id.toString(),
        courseId: doc.courseId.toString(),
      })),
    );
}

/**
 * Создает новый модуль курса.
 *
 * @param moduleData - Данные модуля.
 * @param opts - Дополнительные параметры.
 * @param [opts.session] - Сессия MongoDB транзакций.
 */
export async function saveModule(
  moduleData: IModule,
  opts?: { session?: ClientSession },
): Promise<void> {
  const newModule: HydratedDocument<IModule> = new Module({
    ...moduleData,
  });

  await newModule.save({ session: opts?.session });
}

/**
 * Создает новый модуль курса и возвращает его в виде плоского JS объекта.
 *
 * @param  moduleData - Данные для создания нового модуля курса.
 * @param opts - Дополнительные параметры.
 * @param [opts.blankLesson] - Флаг для создания пустого урока при создании нового
 * модуля курса.
 * @param [opts.session] - Сессия MongoDB транзакций.
 * @returns Новый модуль в виде плоского JS объекта.
 */
export async function saveAndReturnModule(
  moduleData: IModule,
  opts?: { blankLesson?: boolean; session?: ClientSession },
): Promise<IModuleContentClient> {
  const newModule: HydratedDocument<IModule> = new Module({
    ...moduleData,
  });

  await newModule.save({ session: opts?.session });

  if (opts?.blankLesson) {
    const lesson: ILessonContentClient = await saveAndReturnLesson(
      { moduleId: newModule._id, title: NEW_COURSE_DEFAULTS.LESSON_TITLE },
      { session: opts?.session, blankStep: true },
    );

    return {
      _id: newModule._id.toString(),
      title: newModule.title,
      courseId: newModule.courseId.toString(),
      createdAt: newModule.createdAt?.toDateString(),
      lessons: [lesson],
    };
  }

  return {
    _id: newModule._id.toString(),
    title: newModule.title,
    courseId: newModule.courseId.toString(),
    createdAt: newModule.createdAt?.toDateString(),
    lessons: [] as ILessonContentClient[],
  };
}

/**
 * Обновляет название модуля и возвращает плоский объект для клиента.
 *
 * @param moduleId - ID модуля.
 * @param title - Новое название модуля.
 * @returns Обновленный модуль (плоский объект).
 */
export async function updateModuleTitle(moduleId: id, title: string): Promise<void> {
  await dbConnect();

  if (!title || !title.trim()) throw new Error('Название модуля не может быть пустым');

  await Module.findOneAndUpdate(
    { _id: moduleId },
    { title: title.trim() },
    { new: true, runValidators: true },
  );
}
