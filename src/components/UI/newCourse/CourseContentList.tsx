// Константы
import { NEW_COURSE_DEFAULTS } from "@/constants/newCourseContent";
// Модели Mongoose
import Module from "@/models/Module";
// Типы и интерфейсы
import { Types } from "mongoose";
import { id } from "@/types/id.type";
import { ICourseContentClient } from "@/types/Course.interface";
import { IModuleClient, IModuleContentClient } from "@/types/Module.interface";
import { ILessonContentClient } from "@/types/Lesson.interface";
// Функции и хуки
import { use } from "react";
import ModuleTitleInput from "@UI/newCourse/ModuleTitleInput";
import ModuleContentList from "@UI/newCourse/ModuleContentList";
import AddModuleBtn from "@/components/UI/newCourse/buttons/AddModuleBtn";
import { saveAndReturnModule, updateModuleTitle } from "@/services/modules";
import { getLessons } from "@/services/lessons";

export default function CourseContentList({
	initialData,
	params,
	searchParams,
	className
}: {
	initialData: ICourseContentClient;
	params: { courseId: string };
	searchParams: { module: string; lesson: string; step: string };
	className?: string;
}) {
	/**
	 * Изменяет имя модуля с переданным id в базе данных.
	 *
	 * @param moduleId - id модуля.
	 * @param newModuleTitle - Новое название модуля.
	 */
	async function updateModuleTitle(moduleId: string, newModuleTitle: string) {
		"use server";
		await Module.findByIdAndUpdate(moduleId, { title: newModuleTitle });
	}

	async function addModule() {
		"use server";
	}
	return (
		<section
			className={`p-4 overflow-y-scroll bg-gray-100 rounded-2xl w-xs h-full border-16 border-gray-100 ${className}`}
		>
			<ol>
				{initialData.modules.map((module) => (
					<li key={module._id} className="mb-8">
						<ModuleTitleInput
							moduleId={module._id}
							initialTitle={module.title}
							updateModuleTitleAction={updateModuleTitle}
						></ModuleTitleInput>
						<ModuleContentList
							initialData={module}
							params={params}
							searchParams={searchParams}
						></ModuleContentList>
					</li>
				))}
				<li>
					<AddModuleBtn onClickAction={addModule}>Добавить модуль</AddModuleBtn>
				</li>
			</ol>
		</section>
	);
}
