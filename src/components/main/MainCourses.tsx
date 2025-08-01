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
					className="block justify-self-end w-3xl"
					src="/images/icons/star-dude.svg"
					title="Человечек со звездой в руках"
					alt="Человечек со звездой в руках предлагает вам оценить самые популярные курсы на платформе"
					width={539}
					height={341}
				></Image>
			</div>
		</section>
	);
}
