import { ICourseData } from "@/types/Course.interface";

import { getCourses } from "@/lib/actions";

import CourseCard from "@/components/main/CourseCard";

export const revalidate = 60;

export default async function AllCourses() {
	const courses: ICourseData[] = await getCourses();

	return (
		<div className="w-fit mx-auto mt-8">
			<h2 className="font-bold inline-block text-2xl">Все курсы</h2>
			<section
				id="all-courses"
				className="grid grid-cols-3 grid-rows-2 my-4 gap-4 flex-wrap bg-neutral-100 rounded-xl w-fit p-8"
			>
				{courses.map((course) => (
					<CourseCard
						key={course._id as React.Key}
						courseData={course}
					></CourseCard>
				))}
			</section>
		</div>
	);
}
