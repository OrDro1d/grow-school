import Step from "@/components/create_course/Steps";
import { ICourseContentClient } from "@/types/Course.interface";

import { use } from "react";

export default function CourseContent({
	initialData,
	searchParams
}: {
	initialData: Promise<ICourseContentClient>;
	searchParams?: { module: string; lesson: string; step: string };
}) {
	const courseData = use(initialData);

	return searchParams ? (
		<form className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<label htmlFor="lesson-title" className="text-2xl font-medium">
					Название урока
				</label>
				<input
					className="p-4 border-2 border-gray-200 w-4xl rounded-2xl focus:outline-skiey"
					id="lesson-title"
					placeholder="введите название урока"
					title="Название урока"
					type="text"
					required
					// value={
					// 	courseData.modules![Number(searchParams.module)].lessons![
					// 		Number(searchParams.lesson)
					// 	].title
					// }
				></input>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="step-content" className="text-2xl font-medium">
					Содержание урока
				</label>
				<textarea
					className="p-4 border-2 border-gray-200 resize-none w-4xl rounded-2xl focus:outline-skiey"
					id="step-content"
					placeholder="введите содержимое урока"
					title="Содержимое урока"
					required
					rows={12}
					maxLength={9999}
				></textarea>
			</div>
			<button className="inline-block px-16 py-4 text-xs font-medium transition-all border-2 shadow-lg cursor-pointer w-fit md:text-base border-skiey rounded-4xl sm:text-xs hover:bg-skiey hover:text-white shadow-black/10 hover:shadow-skiey/20">
				Сохранить
			</button>
		</form>
	) : null;
}
