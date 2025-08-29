"use client";

import { useState, useRef } from "react";

export default function LessonTitleInput({
	lessonId,
	initialTitle,
	updateLessonTitleAction,
	className
}: {
	lessonId: string;
	initialTitle: string;
	updateLessonTitleAction: (
		lessonId: string,
		newLessonTitle: string
	) => Promise<void>;
	className?: string;
}) {
	const [title, setTitle] = useState(initialTitle);
	const prevTitle = useRef("");

	return (
		<input
			className={`p-4 border-gray-100/0 placeholder:text-base placeholder:font-medium text-3xl font-bold border-2 hover:border-gray-200 w-4xl rounded-2xl focus:outline-skiey ${className}`}
			id="lesson-title"
			name="lesson-title"
			placeholder="Введите название урока"
			title="Название урока"
			type="text"
			inputMode="text"
			required
			value={title ?? "..."}
			onChange={(e) => {
				if (title && title.trim()) prevTitle.current = title;
				setTitle(e.target.value);
			}}
			onBlur={async (e) => {
				e.preventDefault();
				try {
					if (title && title.trim()) {
						await updateLessonTitleAction(lessonId, title);
					} else {
						setTitle(prevTitle.current);
					}
				} catch (error: any) {
					console.log(error);
				}
			}}
			onKeyDown={async (e) => {
				if (e.key === "Enter") {
					e.preventDefault();
					try {
						if (title && title.trim()) {
							await updateLessonTitleAction(lessonId, title);
						} else {
							setTitle(prevTitle.current);
						}
					} catch (error: any) {
						console.log(error);
					}
				}
			}}
		></input>
	);
}
