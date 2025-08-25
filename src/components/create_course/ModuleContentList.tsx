"use client";
// Константы
import { NEW_COURSE_DEFAULTS } from "@/constants/newCourseContent";
// Типы и интерфейсы
import { Types } from "mongoose";
import { id } from "@/types/id.type";
import { ILessonContentClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и хуки
import { useState, use, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getModuleFull } from "@/services/modules";
import { saveAndReturnLesson } from "@/services/lessons";
import { getSteps } from "@/services/steps";

export default function ModuleContentList({
	className,
	initialData
}: {
	className?: string;
	initialData: ILessonContentClient[];
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const moduleId = searchParams.get("module");
	const lessonId = searchParams.get("lesson");

	const [lessons, setLessons] = useState<ILessonContentClient[]>(initialData);

	// Обновление имен уроков при изменении URL запроса
	useEffect(() => {
		async function fetchLessonsData(moduleId: id) {
			const updatedModule = await getModuleFull(moduleId!);
			setLessons(updatedModule.lessons!);
		}
		lessons.length ? fetchLessonsData(lessons[0].moduleId) : null;
	}, [lessonId]);

	/**
	 * Добавляет новый пустой урок на клиенте.
	 */
	async function addLesson() {
		const newLesson: ILessonContentClient = await saveAndReturnLesson(
			{
				title: NEW_COURSE_DEFAULTS.LESSON_TITLE,
				moduleId: lessons[0].moduleId
			},
			// blankStep обозначает необходимость создать пустой шаг для урока.
			// Это нужно для того, что бы при отрисовке ModuleContentList для каждого урока
			// создавалась корректная ссылка для редактирования.
			{ blankStep: true }
		);
		//

		setLessons((prev) => [...prev, { ...newLesson, steps: newLesson.steps }]);
	}

	function showStepEditingForm(lesson: ILessonContentClient) {
		router.push(
			`${pathname}?module=${lesson.moduleId}&lesson=${lesson._id}&step=${lesson.steps?.[0]?._id}`
		);
	}

	return (
		<ol
			className={`p-4 my-2 bg-white border-2 border-gray-200 shadow-lg shadow-black/10 rounded-2xl ${className}`}
		>
			{lessons.length
				? lessons.map((lesson) => (
						<li key={lesson._id} className="my-2">
							<button
								className="cursor-pointer wrap-anywhere text-left"
								type="button"
								onClick={(e) => showStepEditingForm(lesson)}
							>
								{lesson.title}
							</button>
						</li>
				  ))
				: null}
			<li>
				<button
					type="button"
					className="block px-8 py-2 mx-auto text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint"
					onClick={addLesson}
				>
					Добавить урок
				</button>
			</li>
		</ol>
	);
}
