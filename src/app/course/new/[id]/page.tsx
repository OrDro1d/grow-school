// Модели и связь с бд
import Course from "@/models/Course";
// Типы и интерфейсы
import { ICourse, ICourseClient } from "@/types/Course.interface";
import { IModuleClient } from "@/types/Module.interface";
// Функции и хуки
import { authGuard } from "@/services/auth";
import { getCourseFull } from "@/services/courses";
import { getModules, getModuleFull } from "@/services/modules";
import { getLessonFull } from "@/services/lessons";
import { getSteps } from "@/services/steps";
import { redirect } from "next/navigation";
// Компоненты
import { Suspense } from "react";
import CourseContentList from "@/components/create_course/CourseContentList";
import LessonContent from "@/components/create_course/LessonContent";

export default async function CourseEditingPage({
	params,
	searchParams
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{
		module: string;
		lesson: string;
		step: string;
	}>;
}) {
	await authGuard();

	const { id } = await params;
	const searchParamsData = await searchParams;
	// console.log(searchParamsData);
	const course: ICourse | null = await Course.findById(id).lean<ICourse>();
	// console.log(course);
	if (!course) {
		redirect("/not-found");
	}

	const initialData = getCourseFull(id);
	// Если searchParamsData - не пустой объект, то получаем урок по переданному в URL id
	const initialLessonData = Object.keys(searchParamsData).length
		? await getLessonFull(searchParamsData!.lesson)
		: null;

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

					{
						// Если есть данные о модуле, показываем LessonContent, иначе заглушку
						initialLessonData ? (
							<Suspense
								fallback={
									<div>
										<p>Загружаем содержимое урока...</p>
									</div>
								}
							>
								<LessonContent initialData={initialLessonData}></LessonContent>
							</Suspense>
						) : (
							<div>
								<p>Выберите урок для редактирования</p>
							</div>
						)
					}
				</div>
			</div>
		</main>
	);
}
