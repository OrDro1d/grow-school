import { ICourseData } from "@/types/Course.interface";

import { getCourses } from "@/lib/actions";

import Image from "next/image";
import MainCourseCard from "@/components/main/MainCourseCard";

export const revalidate = 60;

export default async function MainCourses() {
	const courses: ICourseData[] = await getCourses();

	return (
		<section
			id="recommended-courses"
			className="flex items-center justify-center my-4 gap-2 flex-nowrap"
		>
			{courses.map((course) => (
				<MainCourseCard
					key={course._id as React.Key}
					courseData={course}
				></MainCourseCard>
			))}
			<div className="flex-col gap-4 w-70 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-xl p-8">
				<h2 className="inline-block font-medium text-white text-lg">
					Не знаете с чего начать? Попробуйте наши{" "}
					<span className="text-mint">популярные</span> курсы!
				</h2>
				<Image
					className="block relative top-5 justify-self-end"
					src="/images/icons/dude-with-star.svg"
					alt=""
					width={180}
					height={180}
				></Image>
			</div>
		</section>
	);
}
