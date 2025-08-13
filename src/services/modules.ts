"use server";

import mongoose from "mongoose";
import { dbConnect } from "@/services/db";

import "@/models/User";
import "@/models/Course";
import "@/models/Module";
import "@/models/Lesson";
import "@/models/Step";

import User from "@/models/User";
import Course from "@/models/Course";
import Module from "@/models/Module";
import Lesson from "@/models/Lesson";
import Step from "@/models/Step";

import { id } from "@/types/id.type";
import { IModule, IModuleClient } from "@/types/Module.interface";

/**
 * Возвращает все модули курса по его id.
 *
 * @param {id} id - id модуля.
 * @returns {Promise<IModuleClient[]>} - Массив модулей курса.
 */
export async function getModules(id: id): Promise<IModuleClient[]> {
	const modules: IModuleClient[] = await Module.find({ course: id })
		.lean()
		.transform((docs) =>
			docs.map((doc) => ({
				...doc,
				_id: doc._id?.toString(),
				title: doc.title,
				course: doc.course.toString()
			}))
		);
	return modules;
}

/**
 * Создает новый модуль курса.
 *
 * @param {IModule} moduleData - Данные модуля.
 */
export async function saveModule(moduleData: IModule): Promise<void> {
	const newModule = new Module({
		course: moduleData.course,
		title: moduleData.title
	});

	await newModule.save();
}

/**
 * Создает новый модуль курса и возвращает его в виде плоского JS объекта.
 *
 * @param {IModule} moduleData - Данные для создания нового модуля курса.
 * @returns {IModuleClient} - Новый модуль в виде плоского JS объекта.
 */
export async function saveAndReturnModule(
	moduleData: IModule
): Promise<IModuleClient> {
	const newModule = new Module({
		course: moduleData.course,
		title: moduleData.title
	});

	await newModule.save();

	const newModuleClient: IModuleClient = {
		_id: newModule._id.toString(),
		course: newModule.course.toString(),
		title: newModule.title
	};

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

	if (!title || !title.trim()) {
		throw new Error("Название модуля не может быть пустым");
	}

	await Module.findOneAndUpdate(
		{ _id: moduleId },
		{ $set: { title: title.trim() } },
		{ new: true, runValidators: true }
	);
}
