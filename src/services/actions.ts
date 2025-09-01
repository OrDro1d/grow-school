"use server";

import { NEW_COURSE_DEFAULTS } from "@/constants/newCourseContent";
import { IStepClient } from "@/types/Step.interface";
import Lesson from "@/models/Lesson";
import { revalidatePath } from "next/cache";
import { saveAndReturnLesson } from "./lessons";
import { deleteStep, saveAndReturnStep, updateStep } from "@/services/steps";
import Step from "@/models/Step";
import { redirect, RedirectType } from "next/navigation";
import { HydratedDocument } from "mongoose";

/**
 * Создает новый урок в базе данных и обновляет страницу для его отображения.
 *
 * @param {string} courseId - id курса.
 * @param {string} moduleId - id модуля.
 */
export async function addLessonAction(
	courseId: string,
	moduleId: string
): Promise<void> {
	try {
		await saveAndReturnLesson(
			{
				moduleId,
				title: NEW_COURSE_DEFAULTS.LESSON_TITLE
			},
			{ blankStep: true }
		);
	} catch (error: any) {
		console.log(error instanceof Error ? error.message : error);
	}
	revalidatePath(`/course/new/${courseId}`);
}

/**
 * Изменяет название урока с переданным id в базе данных.
 *
 * @param {string} lessonId - id урока.
 * @param {string} newLessonTitle - Новое название урока.
 */
export async function updateLessonTitleAction(
	lessonId: string,
	newLessonTitle: string
): Promise<void> {
	try {
		await Lesson.findByIdAndUpdate(lessonId, { title: newLessonTitle });
	} catch (error: any) {
		console.log(error instanceof Error ? error.message : error);
	}
}

/**
 * Добавляет шаг к уроку с переданным `lessonId`.
 *
 * @param {string} courseId - id курса.
 * @param {string} lessonId - id урока.
 */
export async function addStepAction(
	courseId: string,
	lessonId: string
): Promise<void> {
	if ((await Step.countDocuments({ lessonId })) > 9)
		throw new Error(
			"Шагов в одном уроке не может быть больше 10. Если вам нужно создать больше шагов подумайте над созданием нового урока."
		);
	try {
		await saveAndReturnStep({
			lessonId,
			content: NEW_COURSE_DEFAULTS.STEP_CONTENT
		});
	} catch (error: any) {
		console.log(error instanceof Error ? error.message : error);
	}
	revalidatePath(`/course/new/${courseId}`);
}

/**
 * Сохраняет изменения в шаге.
 *
 * @param {string} courseId - id курса.
 * @param {IStepClient} currentStep - Текущий редактируемый шаг.
 */
export async function updateStepAction(
	courseId: string,
	currentStep: IStepClient
): Promise<void> {
	// Обновляем измененные шаги
	try {
		await updateStep(currentStep);
	} catch (error: any) {
		console.log(error instanceof Error ? error.message : error);
	}
	// Сохраняем изменение имени урока
	revalidatePath(`/course/new/${courseId}`);
}

/**
 * Удаляет шаг из урока.
 *
 * @param {string} courseId - id курса.
 * @param {IStepClient} currentStep - Удаляемый шаг.
 */
export async function deleteStepAction(
	courseId: string,
	moduleId: string,
	step: IStepClient
): Promise<void> {
	try {
		await deleteStep(step._id, {
			checkLesson: true
		});
	} catch (error: any) {
		console.log(error instanceof Error ? error.message : error);
	}
	// Ищем шаг для перемещения пользователя после удаления шага.
	const stepToPush: { _id: string } | null = await Step.findOne({
		lessonId: step.lessonId
	})
		.select("_id")
		.lean<{ _id: string }>();
	// Если шага для перемещения не нашлось (вероятно, удаленный шаг был последним), перемещаем пользователя на выбор урока.
	redirect(
		stepToPush
			? `/course/new/${courseId}?module=${moduleId}&lesson=${step.lessonId}&step=${stepToPush._id}`
			: `/course/new/${courseId}`,
		RedirectType.replace
	);
}
