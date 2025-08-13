"use client";

import { id } from "@/types/id.type";

import { deleteCourse } from "@/services/courses";

export default function UsersCoursesDeleteBtn({
	courseId,
	imageId,
	className
}: {
	courseId: id;
	imageId: string;
	className?: string;
}) {
	return (
		<button
			className={`block px-4 py-2 text-sm transition-all bg-white border-2 border-red-500 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-red-500 hover:border-red-700 ${className}`}
			type="button"
			onClick={(e) => deleteCourse(courseId)}
		>
			🗑️
		</button>
	);
}
