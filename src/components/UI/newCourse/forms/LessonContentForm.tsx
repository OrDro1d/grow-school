"use client";
// Типы и интерфейсы
import { id } from "@/types/id.type";
import { IModuleContentClient } from "@/types/Module.interface";
import { ILessonContentClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и хуки
import { use, useEffect, useState, useRef } from "react";
import Step from "@UI/newCourse/Steps";
import {
	useSearchParams,
	useRouter,
	useParams,
	usePathname
} from "next/navigation";
import { getLessonFull, saveLesson, saveLessonTitle } from "@/services/lessons";
import { updateSteps, deleteStep } from "@/services/steps";
import { ICourseContentClient } from "@/types/Course.interface";

export default function LessonContentForm({
	initialData
}: {
	initialData: ILessonContentClient;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const [steps, setSteps] = useState<IStepClient[]>(initialData.steps);
	const [title, setTitle] = useState(initialData.title);
	// Предыдущее значение имени урока на случай если пользователем будет введен некорректный для обновления
	const prevTitle = useRef("");

	const moduleId = searchParams.get("module");
	const lessonId = searchParams.get("lesson");
	const stepId = searchParams.get("step");
	// Текущий шаг, который просматривает пользователь
	const currentStep = steps.find((step) => step.lessonId === lessonId);

	// При изменении id урока в URL строке загружаются данные о новом уроке

	/**
	 * Изменяет содержимое шага.
	 *
	 * @param {string} content - Содержимое шага.
	 */
	function editStepContent(content: string): void {
		currentStep!.content = content;
		setSteps((prev) =>
			prev.map((s) => (s._id === currentStep!._id ? { ...s, content } : s))
		);
	}

	/**
	 * Изменяет имя урока.
	 *
	 * @param {string} title - Новое имя урока.
	 */
	function changeLessonTitle(title: string): void {
		if (initialData.title && initialData.title.trim()) {
			prevTitle.current = initialData.title;
		}
		setTitle(title);
	}

	/**
	 * Сохраняет изменения в шаге.
	 */
	async function saveChanges(
		formData: FormData,
		pathname: string
	): Promise<void> {
		// Ищем шаги с lessonId редактируемого урока
		const updatedSteps = steps.map((step) =>
			step.lessonId === lessonId
				? { ...step, content: currentStep!.content }
				: step
		);
		// Обновляем измененные шаги
		await updateSteps(updatedSteps);
		// Сохраняем изменение имени урока
		await saveLessonTitle(lessonId!, title);
		// Обновляем состояние шагов
	}

	return (
		<form
			className="flex flex-col gap-4"
			action={(formData) => saveChanges(formData, pathname)}
		>
			<div className="flex flex-col gap-2">
				<label htmlFor="lesson-title" className="text-2xl font-medium">
					Название урока
				</label>
				<input
					className="p-4 border-2 border-gray-200 w-4xl rounded-2xl focus:outline-skiey"
					id="lesson-title"
					name="lesson-title"
					placeholder="введите название урока"
					title="Название урока"
					type="text"
					inputMode="text"
					required
					value={title ?? "..."}
					onChange={(e) => changeLessonTitle(e.target.value)}
				></input>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="step-content" className="text-2xl font-medium">
					Содержание урока
				</label>
				<textarea
					className="p-4 border-2 border-gray-200 resize-none w-4xl rounded-2xl focus:outline-skiey"
					id="step-content"
					name="step-content"
					placeholder="введите содержимое урока"
					title="Содержимое урока"
					inputMode="text"
					required
					rows={12}
					maxLength={9999}
					value={currentStep?.content ?? "..."}
					onChange={(e) => editStepContent(e.target.value)}
				></textarea>
			</div>
			<div className="flex gap-4">
				<button
					className="px-16 py-4 text-xs font-medium transition-all border-2 shadow-lg cursor-pointer w-fit md:text-base border-skiey rounded-4xl  hover:bg-skiey hover:text-white shadow-black/10 hover:shadow-skiey/20"
					type="button"
				>
					Сохранить
				</button>
				<button
					className="flex items-center px-16 py-4 text-xs font-medium md:text-base transition-all bg-white border-2 border-red-500 shadow-lg cursor-pointer rounded-4xl w-40h-full shadow-black/10 hover:text-white hover:bg-red-500 hover:shadow:red-700/20 hover:border-red-700"
					type="button"
					onClick={async (e) => {
						await deleteStep(currentStep!._id, {
							checkLesson: true,
							pathname: pathname
						});
					}}
				>
					Удалить шаг 🗑️
				</button>
			</div>
		</form>
	);
}
