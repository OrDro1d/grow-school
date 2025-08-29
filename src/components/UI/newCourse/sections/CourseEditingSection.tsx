import { ICourseContentClient } from "@/types/Course.interface";

import { Suspense, use } from "react";
import CourseContentList from "@UI/newCourse/CourseContentList";
import LessonContentForm from "@UI/newCourse/sections/LessonContentSection";

export default function CourseEditingSection({
	params,
	searchParams,
	initialData
}: {
	params: { courseId: string };
	searchParams: Promise<{
		module: string;
		lesson: string;
		step: string;
	}>;
	initialData: Promise<ICourseContentClient>;
}) {
	const courseData = use(initialData);
	const searchParamsData = use(searchParams);

	const moduleData = courseData.modules.find(
		(m) => m._id === searchParamsData.module
	);

	const lessonData =
		moduleData?.lessons.find((l) => l._id === searchParamsData.lesson) || null;

	return (
		<section className="flex h-full gap-16 mt-2">
			<Suspense
				fallback={
					<div>
						<p>Ждем модули...</p>
					</div>
				}
			>
				<CourseContentList
					initialData={courseData}
					params={params}
					searchParams={searchParamsData}
				></CourseContentList>
			</Suspense>
			{lessonData ? (
				<Suspense
					fallback={
						<div>
							<p>Загружаем содержимое урока...</p>
						</div>
					}
				>
					<LessonContentForm
						key={searchParamsData.lesson}
						params={params}
						searchParams={searchParamsData}
						initialData={lessonData}
					></LessonContentForm>
				</Suspense>
			) : (
				<div>
					<p>Выберите урок для редактирования.</p>
				</div>
			)}
		</section>
	);
}
