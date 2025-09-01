import { ICourseClient } from "@/types/Course.interface";

import { use } from "react";
import Image from "next/image";
import MainCourseCard from "@UI/main/MainCourseCard";

export const revalidate = 60;

export default function MainCourses({
	courses,
	className
}: {
	courses: Promise<ICourseClient[]>;
	className?: string;
}) {
	const coursesData = use(courses);
	return (
		<section
			id="recommended-courses"
			className={`flex items-center justify-center my-4 gap-2 flex-nowrap ${className}`}
		>
			{coursesData.map((course) => (
				<MainCourseCard
					key={course._id as React.Key}
					courseData={course}
				></MainCourseCard>
			))}
			<div className="flex-col gap-4 p-8 w-70 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-xl">
				<h2 className="inline-block text-lg font-medium text-white">
					Не знаете с чего начать? Попробуйте наши{" "}
					<span className="text-mint">популярные</span> курсы!
				</h2>
				<Image
					className="block justify-self-end w-3xl"
					src="/images/icons/star-dude.svg"
					title="Самые популярные курсы"
					alt="Человечек со звездой в руках предлагает вам оценить самые популярные курсы на платформе"
					width={539}
					height={341}
				></Image>
			</div>
		</section>
	);
}
