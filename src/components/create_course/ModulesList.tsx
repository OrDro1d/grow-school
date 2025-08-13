"use client";

import { Types } from "mongoose";
import { id } from "@/types/id.type";
import { IModule, IModuleClient } from "@/types/Module.interface";

import { useState, useEffect, use } from "react";
import LessonsList from "./LessonsList";
import {
	saveAndReturnModule,
	getModules,
	saveModuleTitle
} from "@/services/modules";

export default function ModulesList({
	className,
	initialData,
	id
}: {
	className?: string;
	initialData: Promise<IModuleClient[]>;
	id: id;
}) {
	const [modules, setModules] = useState<IModuleClient[]>(use(initialData));

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
		const newModule: IModuleClient = await saveAndReturnModule({
			title: `Модуль ${modules.length + 1}`,
			course: id as Types.ObjectId
		});
		setModules((prev) => [...prev, newModule]);
	}

	return (
		<section
			className={`p-4 overflow-y-scroll bg-gray-100 rounded-2xl w-xs h-full border-16 border-gray-100 ${className}`}
		>
			<ol>
				{modules.map((module, index) => (
					<li key={module._id!} className="mb-8">
						<input
							className="font-medium"
							placeholder="Имя модуля"
							onBlur={(e) =>
								saveModuleTitle(modules[index]._id!, e.target.value)
							}
							onChange={(e) => updateTitles(e.target.value, index)}
							value={module.title}
						></input>
						<LessonsList></LessonsList>
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
