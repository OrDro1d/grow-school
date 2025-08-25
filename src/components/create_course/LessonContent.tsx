"use client";
// Типы и интерфейсы
import { id } from "@/types/id.type";
import { IModuleContentClient } from "@/types/Module.interface";
import { ILessonContentClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и хуки
import { use, useEffect, useState, useRef } from "react";
import Step from "@/components/create_course/Steps";
import { useSearchParams, useRouter } from "next/navigation";
import { getLessonFull, saveLessonTitle } from "@/services/lessons";

export default function LessonContent({
	initialData
}: {
	initialData: ILessonContentClient;
}) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const lesson = initialData;
	const [title, setTitle] = useState(lesson.title);
	const [steps, setSteps] = useState<IStepClient[]>(lesson.steps!);

	const lessonId = searchParams.get("lesson");
	const stepId = searchParams.get("step");
	// При изменении id урока в URL строке загружаются данные о новом уроке
	useEffect(() => {
		async function fetchLessonData(lessonId: id) {
			const lesson = await getLessonFull(lessonId);
			setTitle(lesson!.title);
			setSteps(lesson!.steps!);
		}
		fetchLessonData(lessonId!);
	}, [lessonId]);
	// Предыдущее значение имени урока на случай если пользователем будет введен некорректный для обновления
	const prevTitle = useRef("");
	// Текущий шаг, который просматривает пользователь
	const currentStep = useRef<IStepClient>(null);
	for (let step of steps) {
		if (step._id === stepId) {
			currentStep!.current = step;
		}
	}

	function editStepContent() {}
	function changeLessonTitle() {}

	return (
		<form className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<label htmlFor="lesson-title" className="text-2xl font-medium">
					Название урока
				</label>
				<input
					className="p-4 border-2 border-gray-200 w-4xl rounded-2xl focus:outline-skiey"
					id="lesson-title"
					placeholder="введите название урока"
					title="Название урока"
					type="text"
					required
					value={title}
					// Отображение изменения имени в поле input
					onChange={(e) => {
						if (lesson.title && lesson.title.trim())
							prevTitle.current = lesson.title;
						setTitle(e.target.value);
					}}
					// onBlur и onKeyDown только передают и сохраняют в бд значения titles, обновленные ранее
					onBlur={async (e) => {
						e.preventDefault();
						try {
							await saveLessonTitle(lesson._id, title);
						} catch (error: any) {
							setTitle(prevTitle.current);
							console.log(error);
						} finally {
							router.refresh();
						}
					}}
					onKeyDown={async (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							try {
								await saveLessonTitle(lesson._id, title);
							} catch (error: any) {
								setTitle(prevTitle.current);
								console.log(error);
							} finally {
								router.refresh();
							}
						}
					}}
				></input>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="step-content" className="text-2xl font-medium">
					Содержание урока
				</label>
				<textarea
					className="p-4 border-2 border-gray-200 resize-none w-4xl rounded-2xl focus:outline-skiey"
					id="step-content"
					placeholder="введите содержимое урока"
					title="Содержимое урока"
					required
					rows={12}
					maxLength={9999}
					value={
						currentStep
							? currentStep?.current?.content ?? "Содержимое шага не найдено"
							: "Загрузка..."
					}
					onChange={editStepContent}
				></textarea>
			</div>
			<button className="inline-block px-16 py-4 text-xs font-medium transition-all border-2 shadow-lg cursor-pointer w-fit md:text-base border-skiey rounded-4xl sm:text-xs hover:bg-skiey hover:text-white shadow-black/10 hover:shadow-skiey/20">
				Сохранить
			</button>
		</form>
	);
}
