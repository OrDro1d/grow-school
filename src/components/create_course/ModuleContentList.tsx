"use client";
// Типы и интерфейсы
import { Types } from "mongoose";
import { id } from "@/types/id.type";
import { ILessonClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и хуки
import { useState } from "react";
import { saveAndReturnLesson } from "@/services/lessons";
import { ILessonContentClient } from "@/types/Lesson.interface";

export default function LessonsList({
	className,
	initialData,
	moduleId
}: {
	className?: string;
	initialData: ILessonContentClient[];
	moduleId: string;
}) {
	const [lessons, setLessons] = useState<ILessonContentClient[]>(initialData);

	async function addLesson() {
		const newLesson: ILessonContentClient = await saveAndReturnLesson({
			title: `Урок ${lessons.length + 1}`,
			moduleId: moduleId
		});
		setLessons((prev) => [
			...prev,
			{ ...newLesson, steps: [] as IStepClient[] }
		]);
	}

	return (
		<ol
			className={`p-4 my-2 bg-white border-2 border-gray-200 shadow-lg shadow-black/10 rounded-2xl ${className}`}
		>
			{lessons.length
				? lessons.map((lesson, index) => (
						<li key={index} className="my-2">
							<p className="text-sm">{lesson.title}</p>
						</li>
				  ))
				: null}
			<li>
				<button
					type="button"
					className="block px-8 py-2 mx-auto text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint"
					onClick={(e) => addLesson()}
				>
					Добавить урок
				</button>
			</li>
		</ol>
	);
}
