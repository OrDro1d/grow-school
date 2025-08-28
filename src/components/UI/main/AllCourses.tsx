import { ICourseClient } from "@/types/Course.interface";

import { getCourses } from "@/services/courses";

import CourseCard from "@/components/UI/main/CourseCard";

export const revalidate = 60;

export default async function AllCourses({
	className
}: {
	className?: string;
}) {
	const courses: ICourseClient[] = await getCourses({ limit: 6 });

	return (
		<section className={`w-fit mx-auto mt-8 ${className}`}>
			<h2 className="font-bold inline-block text-4xl">Все курсы</h2>
			<section
				id="all-courses"
				className="grid grid-cols-3 grid-rows-2 my-4 gap-4 flex-wrap bg-neutral-100 rounded-2xl w-fit p-8"
			>
				{courses.map((course) => (
					<CourseCard
						key={course._id as React.Key}
						courseData={course}
					></CourseCard>
				))}
			</section>
		</section>
	);
}
