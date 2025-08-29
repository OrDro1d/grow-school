import Lesson from "@/models/Lesson";
// Типы и интерфейсы
import { ILessonContentClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и хуки
import LessonTitleInput from "@UI/newCourse/inputs/LessonTitleInput";
import StepContentForm from "@UI/newCourse/forms/StepContentForm";
import Step from "@UI/newCourse/Step";
import { saveLessonTitle } from "@/services/lessons";
import { updateStep, deleteStep } from "@/services/steps";
import { revalidatePath } from "next/cache";

export default function LessonContentForm({
	initialData,
	params,
	searchParams
}: {
	initialData: ILessonContentClient;
	params: { courseId: string };
	searchParams: {
		module: string;
		lesson: string;
		step: string;
	};
}) {
	const currentStep = initialData.steps.find(
		(step) => step.lessonId === searchParams.lesson
	);
	/**
	 * Изменяет название урока с переданным id в базе данных.
	 *
	 * @param lessonId - id урока.
	 * @param newLessonTitle - Новое название урока.
	 */
	async function updateLessonTitleAction(
		lessonId: string,
		newLessonTitle: string
	) {
		"use server";
		try {
			await Lesson.findByIdAndUpdate(lessonId, { title: newLessonTitle });
		} catch (error: any) {
			console.log(error.message);
		}
	}

	/**
	 * Сохраняет изменения в шаге.
	 *
	 * @param {FormData} formData - Данные формы.
	 * @param {IStepClient} currentStep - Текущий редактируемый шаг.
	 */
	async function updateStepAction(currentStep: IStepClient): Promise<void> {
		"use server";
		// Обновляем измененные шаги
		await updateStep(currentStep);
		// Сохраняем изменение имени урока
		revalidatePath(`/course/new/${params.courseId}`);
	}

	/**
	 * Удаляет шаг из урока.
	 *
	 * @param {IStepClient} currentStep - Удаляемый шаг.
	 */
	async function deleteStepAction(currentStep: IStepClient) {
		"use server";

		await deleteStep(currentStep!._id, {
			checkLesson: true
		});
		revalidatePath(`/course/new/${params.courseId}`);
	}

	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<LessonTitleInput
					lessonId={initialData._id}
					initialTitle={initialData.title}
					updateLessonTitleAction={updateLessonTitleAction}
				></LessonTitleInput>
			</div>
			<StepContentForm
				initialData={currentStep!}
				updateStepAction={updateStepAction}
				deleteStepAction={deleteStepAction}
			></StepContentForm>
		</section>
	);
}
