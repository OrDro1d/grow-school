"use client";

import { useState, useRef } from "react";

export default function ModuleTitleInput({
	moduleId,
	initialTitle,
	updateModuleTitleAction,
	className
}: {
	moduleId: string;
	initialTitle: string;
	updateModuleTitleAction: (
		moduleId: string,
		newModuleTitle: string
	) => Promise<void>;
	className?: string;
}) {
	const [title, setTitle] = useState(initialTitle);
	const prevTitle = useRef(title);

	return (
		<input
			className={`hover:outline-gray-300 font-medium w-full focus:outline-skiey outline-white/0 outline-2 rounded-xl p-2 ${className}`}
			onChange={(e) => {
				if (title && title.trim()) prevTitle.current = title;
				setTitle(e.target.value);
			}}
			onBlur={async (e) => {
				e.preventDefault();
				try {
					if (title && title.trim()) {
						await updateModuleTitleAction(moduleId, title);
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
							await updateModuleTitleAction(moduleId, title);
						} else {
							setTitle(prevTitle.current);
						}
					} catch (error: any) {
						console.log(error);
					}
				}
			}}
			value={title}
			title="Название модуля"
			placeholder="Введите название модуля"
		></input>
	);
}
