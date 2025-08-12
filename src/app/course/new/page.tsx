import { authGuard } from "@/services/auth";

import CourseDataForm from "@/components/create_course/CourseDataForm";

export default async function NewCoursePage() {
	await authGuard();

	return (
		<main className="mt-16">
			<CourseDataForm></CourseDataForm>;
		</main>
	);
}
