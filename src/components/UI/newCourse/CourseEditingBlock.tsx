import { ICourseContentClient } from "@/types/Course.interface";

import { saveLessonTitle } from "@/services/lessons";
import { deleteStep, updateStep } from "@/services/steps";

import { Suspense, use } from "react";
import CourseContentList from "@UI/newCourse/CourseContentList";
import LessonContentForm from "@/components/UI/newCourse/forms/LessonContentForm";
import { IStepClient } from "@/types/Step.interface";
import { revalidatePath } from "next/cache";

export default function CourseEditingBlock({
	initialData,
	params,
	searchParams
}: {
	initialData: Promise<ICourseContentClient>;
	params: { courseId: string };
	searchParams: Promise<{
		module: string;
		lesson: string;
		step: string;
	}>;
}) {
	const courseData = use(initialData);
	const searchParamsData = use(searchParams);

	const moduleData = courseData.modules.find(
		(m) => m._id === searchParamsData.module
	);

	const lessonData =
		moduleData?.lessons.find((l) => l._id === searchParamsData.lesson) || null;

	/**
	 * Сохраняет изменения в шаге.
	 *
	 * @param {FormData} formData - Данные формы.
	 * @param {IStepClient} currentStep - Текущий редактируемый шаг.
	 */
	async function saveChangesAction(
		formData: FormData,
		currentStep: IStepClient
	): Promise<void> {
		"use server";
		// Обновляем измененные шаги
		await updateStep(currentStep);
		// Сохраняем изменение имени урока
		await saveLessonTitle(
			currentStep.lessonId,
			formData.get("lesson-title")!.toString()
		);
		revalidatePath(`/course/new/${courseData._id}`);
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
		revalidatePath(`/course/new/${courseData._id}`);
	}

	return (
		<section className="flex h-full gap-16 mt-2">
			<Suspense
				fallback={
					<div>
						<p>Ждем модули...</p>
					</div>
				}
			>
				<CourseContentList
					initialData={courseData}
					params={params}
					searchParams={searchParamsData}
				></CourseContentList>
			</Suspense>
			{lessonData ? (
				<Suspense
					fallback={
						<div>
							<p>Загружаем содержимое урока...</p>
						</div>
					}
				>
					<LessonContentForm
						key={searchParamsData.lesson}
						courseId={courseData._id}
						saveChangesAction={saveChangesAction}
						deleteStepAction={deleteStepAction}
						initialData={lessonData}
					></LessonContentForm>
				</Suspense>
			) : (
				<div>
					<p>Выберите урок для редактирования.</p>
				</div>
			)}
		</section>
	);
}
