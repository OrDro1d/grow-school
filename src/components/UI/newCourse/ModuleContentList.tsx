// Константы
import { NEW_COURSE_DEFAULTS } from "@/constants/newCourseContent";
// Типы и интерфейсы
import { Types } from "mongoose";
import { id } from "@/types/id.type";
import { IModuleContentClient } from "@/types/Module.interface";
import { ILessonContentClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и хуки
import { use } from "react";
import Link from "next/link";
import AddLessonBtn from "@/components/UI/newCourse/buttons/AddLessonBtn";
import ModuleContentListItem from "@UI/newCourse/ModuleContentListItem";
import { getModuleFull } from "@/services/modules";
import { saveAndReturnLesson } from "@/services/lessons";
import { getSteps } from "@/services/steps";

export default function ModuleContentList({
	initialData,
	params,
	searchParams,
	className
}: {
	initialData: IModuleContentClient;
	params: { courseId: string };
	searchParams: { module: string; lesson: string; step: string };
	className?: string;
}) {
	async function addLesson() {
		"use server";
	}

	return (
		<ol
			className={`p-4 my-2 bg-white border-2 border-gray-200 shadow-lg shadow-black/10 rounded-2xl ${className}`}
		>
			{initialData.lessons.length
				? initialData.lessons.map((lesson) => (
						<ModuleContentListItem
							key={lesson._id}
							lessonData={lesson}
							href={``}
						></ModuleContentListItem>
				  ))
				: null}
			<li>
				<AddLessonBtn addLessonAction={addLesson}>Добавить урок</AddLessonBtn>
			</li>
		</ol>
	);
}
