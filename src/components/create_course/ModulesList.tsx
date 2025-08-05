"use client";

import { useState } from "react";
import LessonsList from "./LessonsList";

export default function ModulesList() {
	const [modules, setModules] = useState<string[]>([]);

	function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
		setModules((prev) => [...prev, `Модуль ${modules.length + 1}`]);
	}
	return (
		<section className="bg-gray-200 rounded-2xl p-8 w-xs">
			<ol>
				{modules.map((module, index) => (
					<li key={index}>
						<LessonsList>{module}</LessonsList>
					</li>
				))}
				<li>
					<button
						type="button"
						className="cursor-pointer"
						onClick={(event) => clickHandler(event)}
					>
						Создать модуль
					</button>
				</li>
			</ol>
		</section>
	);
}
