import Course from "@/models/Course";
import { ICourse, ICourseClient } from "@/types/Course.interface";

import ModulesList from "@/components/create_course/ModulesList";
import CourseContent from "@/components/create_course/CourseContent";
import { Suspense } from "react";
import { redirect } from "next/navigation";

import { getModules } from "@/services/courses";
import { IModuleClient } from "@/types/Module.interface";
import { authGuard } from "@/services/auth";

export default async function CourseEditingPage({
	params,
	searchParams
}: {
	params: Promise<{ id: string }>;
	searchParams?: Promise<any>;
}) {
	await authGuard();

	const { id } = await params;
	const course: ICourse | null = await Course.findById(id).lean<ICourse>();
	// console.log(course);
	if (!course) {
		redirect("/not-found");
	}

	const modulesData: Promise<IModuleClient[]> = getModules(id);

	return (
		<main className="absolute bottom-0 left-0 right-0 px-8 py-4 overflow-hidden top-14">
			<div className="flex flex-col h-[75vh]">
				<div className="flex flex-col">
					<h1 className="text-2xl font-medium">Редактирование курса</h1>
					<h2 className="my-2 text-4xl font-bold">{course?.title}</h2>
				</div>
				<div className="flex h-full gap-16 mt-2">
					<Suspense
						fallback={
							<div>
								<p>Ждем</p>
							</div>
						}
					>
						<ModulesList id={id} initialData={modulesData}></ModulesList>
					</Suspense>
					<CourseContent></CourseContent>
				</div>
			</div>
		</main>
	);
}
