// Типы и интерфейсы
import { IModuleContentClient } from "@/types/Module.interface";
// Функции и хуки
import AddLessonBtn from "@UI/newCourse/buttons/AddLessonBtn";
import ModuleContentItem from "@/components/UI/newCourse/ModuleContentItem";
import { addLessonAction } from "@/services/actions";

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
	return (
		<ol
			className={`p-4 my-2 bg-white border-2 border-gray-200 shadow-lg shadow-black/10 rounded-2xl ${className}`}
		>
			{initialData.lessons.length
				? initialData.lessons.map((lesson) => (
						<ModuleContentItem
							key={lesson._id}
							lessonData={lesson}
							currentLessonId={searchParams.lesson}
							href={`/course/new/${initialData.courseId}/?module=${lesson.moduleId}&lesson=${lesson._id}&step=${lesson.steps?.[0]?._id}`}
						></ModuleContentItem>
				  ))
				: null}
			<li>
				<AddLessonBtn
					moduleData={initialData}
					addLessonAction={addLessonAction}
				>
					Добавить урок
				</AddLessonBtn>
			</li>
		</ol>
	);
}
