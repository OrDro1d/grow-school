"use server";
// Подключение Mongoose и базы данных
import mongoose, { ClientSession, HydratedDocument } from "mongoose";
import { dbConnect } from "@/services/db";
// Подключение файлов с моделями Mongoose
import "@/models/User";
import "@/models/Course";
import "@/models/Module";
import "@/models/Lesson";
import "@/models/Step";
// Модели Mongoose
import Module from "@/models/Module";
// Типы и интерфейсы
import { id } from "@/types/id.type";
import { IModule, IModuleClient } from "@/types/Module.interface";
import { ILessonContentClient } from "@/types/Lesson.interface";

/**
 * Возвращает все модули курса по его id.
 *
 * @param {id} id - id курса.
 * @returns {Promise<IModuleClient[]>} - Массив модулей курса.
 */
export async function getModules(courseId: id): Promise<IModuleClient[]> {
	const modules: IModuleClient[] = await Module.find({ courseId })
		.lean<IModuleClient[]>()
		.transform((docs) =>
			docs.map((doc) => ({
				...doc,
				_id: doc._id.toString(),
				courseId: doc.courseId.toString()
			}))
		);
	return modules;
}

/**
 * Создает новый модуль курса.
 *
 * @param {IModule} moduleData - Данные модуля.
 */
export async function saveModule(
	moduleData: IModule,
	opts?: { session: ClientSession }
): Promise<void> {
	const newModule: HydratedDocument<IModule> = new Module({
		...moduleData
	});

	await newModule.save({ session: opts?.session });
}

/**
 * Создает новый модуль курса и возвращает его в виде плоского JS объекта.
 *
 * @param {IModule} moduleData - Данные для создания нового модуля курса.
 * @returns {IModuleClient} - Новый модуль в виде плоского JS объекта.
 */
export async function saveAndReturnModule(
	moduleData: IModule,
	opts?: { session: ClientSession }
): Promise<IModuleClient> {
	const newModule: HydratedDocument<IModule> = new Module({
		...moduleData
	});

	await newModule.save({ session: opts?.session });

	const newModuleClient: IModuleClient = {
		_id: newModule._id.toString(),
		title: newModule.title,
		courseId: newModule.courseId.toString(),
		createdAt: newModule.createdAt?.toDateString()
	};
	console.log(newModuleClient);
	return newModuleClient;
}

/**
 * Обновляет название модуля и возвращает плоский объект для клиента.
 *
 * @param {id} moduleId - ID модуля.
 * @param {string} title - Новое название модуля.
 * @returns {Promise<IModuleClient>} - Обновленный модуль (плоский объект).
 */

export async function saveModuleTitle(
	moduleId: id,
	title: string
): Promise<void> {
	await dbConnect();

	if (!title || !title.trim())
		throw new Error("Название модуля не может быть пустым");

	await Module.findOneAndUpdate(
		{ _id: moduleId },
		{ title: title.trim() },
		{ new: true, runValidators: true }
	);
}
