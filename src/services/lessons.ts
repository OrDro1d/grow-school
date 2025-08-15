"use server";
// Подключение Mongoose и базы данных
import mongoose, { ClientSession, HydratedDocument, Types } from "mongoose";
import { dbConnect } from "@/services/db";
// Подключение файлов с моделями Mongoose
import "@/models/User";
import "@/models/Course";
import "@/models/Module";
import "@/models/Lesson";
import "@/models/Step";
// Модели Mongoose
import Lesson from "@/models/Lesson";
// Типы и интерфейсы
import { id } from "@/types/id.type";
import { ILesson, ILessonClient } from "@/types/Lesson.interface";

/**
 * Возвращает все уроки модуля по его id.
 *
 * @param {id} id - id модуля.
 * @returns {Promise<IModuleClient[] | null>} - Массив уроков модуля.
 */
export async function getLessons(id: id) {
	const lessons = getLessons.length
		? await Lesson.find({ module: id })
				.lean()
				.transform((docs) =>
					docs.map((doc) => ({
						...doc,
						_id: doc._id?.toString(),
						moduleId: doc.module.toString()
					}))
				)
		: null;
	return lessons;
}

/**
 * Создает новый урок в модуле.
 *
 * @param {ILesson} lessonData - Данные урока.
 */
export async function saveLesson(
	lessonData: ILesson,
	opts?: { session: ClientSession }
): Promise<void> {
	const newLesson: HydratedDocument<ILesson> = new Lesson({
		...lessonData
	});
	await newLesson.save({ session: opts?.session });
}

/**
 * Создает новый урок в модуле и возвращает его в виде плоского JS объекта.
 *
 * @param {ILesson} lessonData - Данные для создания нового урока. курса.
 * @returns {ILessonClient} - Новый урок в виде плоского JS объекта.
 */
export async function saveAndReturnLesson(
	lessonData: ILesson | ILessonClient,
	opts?: { session: ClientSession }
): Promise<ILessonClient> {
	const newLesson: HydratedDocument<ILesson> = new Lesson({
		...lessonData
	});

	await newLesson.save({ session: opts?.session });

	const newLessonClient: ILessonClient = {
		_id: newLesson._id.toString(),
		title: newLesson.title,
		moduleId: newLesson.moduleId.toString(),
		createdAt: newLesson.createdAt?.toDateString()
	};

	return newLessonClient;
}
