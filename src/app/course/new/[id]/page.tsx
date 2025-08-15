// Модели и связь с бд
import Course from "@/models/Course";
// Типы и интерфейсы
import { ICourse, ICourseClient } from "@/types/Course.interface";
import { IModuleClient } from "@/types/Module.interface";
// Функции и хуки
import { getModules } from "@/services/modules";
import { authGuard } from "@/services/auth";
import { getCourseFull } from "@/services/courses";
import { redirect } from "next/navigation";
// Компоненты
import { Suspense } from "react";
import CourseContentList from "@/components/create_course/CourseContentList";
import CourseContent from "@/components/create_course/CourseContent";

export default async function CourseEditingPage({
	params,
	searchParams
}: {
	params: Promise<{ id: string }>;
	searchParams?: Promise<{ module: string; lesson: string; step: string }>;
}) {
	await authGuard();

	const { id } = await params;
	const searchParamsData = await searchParams;

	const course: ICourse | null = await Course.findById(id).lean<ICourse>();
	// console.log(course);
	if (!course) {
		redirect("/not-found");
	}

	const initialData = getCourseFull(id);

	return (
		<main className="absolute bottom-0 left-0 right-0 px-8 py-4 overflow-hidden top-14">
			<div className="flex flex-col h-[75vh]">
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium">Редактирование курса</h1>
					<h2 className="my-2 text-4xl font-bold">{course.title}</h2>
				</div>
				<div className="flex h-full gap-16 mt-2">
					<Suspense
						fallback={
							<div>
								<p>Ждем модули...</p>
							</div>
						}
					>
						<CourseContentList initialData={initialData}></CourseContentList>
					</Suspense>
					<Suspense
						fallback={
							<div>
								<p>Ждем содержимое...</p>
							</div>
						}
					>
						<CourseContent
							initialData={initialData}
							searchParams={searchParamsData}
						></CourseContent>
					</Suspense>
				</div>
			</div>
		</main>
	);
}
