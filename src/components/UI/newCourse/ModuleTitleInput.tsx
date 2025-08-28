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
			className={`font-medium w-full outline-skiey focus:outline-2 outline-0 rounded-xl p-2 ${className}`}
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
			placeholder="Название модуля"
		></input>
	);
}
