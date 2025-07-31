import { ICourseData } from "@/types/Course.interface";

import { getCourses } from "@/lib/actions";

import MainCourseCard from "@/components/main/MainCourseCard";

export const revalidate = 60;

export default async function MainCourses() {
	const courses: ICourseData[] = await getCourses();

	return (
		<section
			id="recommended-courses"
			className="flex items-center justify-center my-4 gap-2 flex-wrap"
		>
			{courses.map((course) => (
				<MainCourseCard
					key={course._id as React.Key}
					courseData={course}
				></MainCourseCard>
			))}
		</section>
	);
}
