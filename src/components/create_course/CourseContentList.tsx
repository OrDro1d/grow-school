"use client";
// Типы и интерфейсы
import { Types } from "mongoose";
import { id } from "@/types/id.type";
import { ICourseContentClient } from "@/types/Course.interface";
import { IModuleClient, IModuleContentClient } from "@/types/Module.interface";
import { ILessonContentClient } from "@/types/Lesson.interface";
// Функции и хуки
import { useState, use } from "react";
import ModuleContentList from "./ModuleContentList";
import { saveAndReturnModule, saveModuleTitle } from "@/services/modules";

export default function CourseContentList({
	className,
	initialData
}: {
	className?: string;
	initialData: Promise<ICourseContentClient>;
}) {
	const courseData = use(initialData);
	const [modules, setModules] = useState<IModuleContentClient[]>(
		courseData.modules!
	);
	const [prevTitle, setPrevTitle] = useState("");

	/**
	 * Обновляет имя модуля на клиенте.
	 *
	 * @param newTitle - Новое имя модуля.
	 * @param index - индекс переименовываемого модуля.
	 */
	function updateTitles(newTitle: string, index: number): void {
		setModules((prev) =>
			prev.map((module, i) =>
				i === index ? { ...module, title: newTitle } : module
			)
		);
	}

	/**
	 * Добавляет новый пустой модуль на клиенте.
	 */
	async function addModule() {
		const newModule: IModuleContentClient = await saveAndReturnModule({
			title: `Модуль ${modules.length + 1}`,
			courseId: courseData._id
		});
		setModules((prev) => [
			...prev,
			{ ...newModule, lessons: [] as ILessonContentClient[] }
		]);
	}

	return (
		<section
			className={`p-4 overflow-y-scroll bg-gray-100 rounded-2xl w-xs h-full border-16 border-gray-100 ${className}`}
		>
			<ol>
				{modules.map((module, index) => (
					<li key={module._id!} className="mb-8">
						<input
							className="font-medium w-full"
							placeholder="Имя модуля"
							// Отображение изменения имени в поле input и обновление состояния modules
							onChange={(e) => {
								if (modules[index].title && modules[index].title.trim())
									setPrevTitle(modules[index].title);
								updateTitles(e.target.value, index);
							}}
							// onBlur и onKeyDown только передают и сохраняют в бд значения titles, обновленные ранее
							onBlur={async (e) => {
								e.preventDefault();
								try {
									await saveModuleTitle(
										modules[index]._id,
										modules[index].title
									);
								} catch (error: any) {
									updateTitles(prevTitle, index);
									console.log(error);
								}
							}}
							onKeyDown={async (e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									try {
										await saveModuleTitle(
											modules[index]._id,
											modules[index].title
										);
									} catch (error: any) {
										updateTitles(prevTitle, index);
										console.log(error);
									}
								}
							}}
							value={module.title}
						></input>
						<ModuleContentList
							initialData={modules[index].lessons!}
							moduleId={modules[index]._id}
						></ModuleContentList>
					</li>
				))}
				<li>
					<button
						type="button"
						className="block px-8 py-2 mx-auto text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint"
						onClick={(e) => addModule()}
					>
						Добавить модуль
					</button>
				</li>
			</ol>
		</section>
	);
}
