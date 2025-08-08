"use client";

import { useState } from "react";

export default function LessonsList({
	children
}: {
	children?: React.ReactNode;
}) {
	const [lessons, setLessons] = useState<string[]>([]);

	function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
		setLessons((prev) => [...prev, `Урок ${lessons.length + 1}`]);
	}
	return (
		<>
			<ol className="p-4 my-2 bg-white border-2 border-gray-200 shadow-lg shadow-black/10 rounded-2xl">
				{lessons.map((lesson, index) => (
					<li key={index} className="my-2">
						<p className="text-sm">{lesson}</p>
					</li>
				))}
				<li>
					<button
						type="button"
						className="block px-8 py-2 mx-auto text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint"
						onClick={(event) => clickHandler(event)}
					>
						Добавить урок
					</button>
				</li>
			</ol>
		</>
	);
}
