"use server";
// Подключение Mongoose и базы данных
import mongoose, { ClientSession, HydratedDocument } from "mongoose";
import { dbConnect } from "@/services/db";
// Подключение файлов с моделями Mongoose
import "@/models/User";
import "@/models/Course";
import "@/models/Module";
import "@/models/Step";
// Модели Mongoose
import Step from "@/models/Step";
// Типы и интерфейсы
import { id } from "@/types/id.type";
import { IStep, IStepClient } from "@/types/Step.interface";

export async function saveStep(
	stepData: IStep,
	opts?: { session: ClientSession }
): Promise<void> {
	const newStep = new Step({
		...stepData
	});

	await newStep.save({ session: opts?.session });
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
		...stepData
	});

	await newStep.save({ session: opts?.session });

	const newStepClient: IStepClient = {
		_id: newStep._id.toString(),
		lessonId: newStep.lessonId.toString(),
		createdAt: newStep.createdAt?.toDateString()
	};

	return newStepClient;
}
