// Константы
import { NEW_COURSE_DEFAULTS } from "@/constants/newCourseContent";
// Типы и интерфейсы
import { IModuleContentClient } from "@/types/Module.interface";
// Функции и хуки
import AddLessonBtn from "@UI/newCourse/buttons/AddLessonBtn";
import ModuleContentListItem from "@UI/newCourse/ModuleContentListItem";
import { saveAndReturnLesson } from "@/services/lessons";
import { revalidatePath } from "next/cache";

export default function ModuleContentList({
	initialData,
	params,
	searchParams,
	className
}: {
	initialData: IModuleContentClient;
	params: { courseId: string };
	searchParams: { module: string; lesson: string; step: string };
	className?: string;
}) {
	/**
	 * Создает новый урок в базе данных и обновляет страницу для его отображения.
	 */
	async function addLessonAction() {
		"use server";
		await saveAndReturnLesson(
			{
				moduleId: initialData._id,
				title: NEW_COURSE_DEFAULTS.LESSON_TITLE
			},
			{ blankStep: true }
		);
		revalidatePath(`/course/new/${initialData._id}`);
	}

	return (
		<ol
			className={`p-4 my-2 bg-white border-2 border-gray-200 shadow-lg shadow-black/10 rounded-2xl ${className}`}
		>
			{initialData.lessons.length
				? initialData.lessons.map((lesson) => (
						<ModuleContentListItem
							key={lesson._id}
							lessonData={lesson}
							currentLessonId={searchParams.lesson}
							href={`/course/new/${initialData.courseId}/?module=${lesson.moduleId}&lesson=${lesson._id}&step=${lesson.steps?.[0]?._id}`}
						></ModuleContentListItem>
				  ))
				: null}
			<li>
				<AddLessonBtn addLessonAction={addLessonAction}>
					Добавить урок
				</AddLessonBtn>
			</li>
		</ol>
	);
}
