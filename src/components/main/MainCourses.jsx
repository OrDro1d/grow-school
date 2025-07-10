import Image from "next/image";

import MainCourse from "@/components/main/MainCoursesCard";

export default function MainCourses() {
	return (
		<section id="main-courses" className="">
			<div className="flex *:mx-2 scroll-smooth">
				<MainCourse></MainCourse>
				<MainCourse></MainCourse>
				<MainCourse></MainCourse>
				<MainCourse></MainCourse>
				<MainCourse></MainCourse>
				<MainCourse></MainCourse>
			</div>
			<div className="mt-4 px-12 py-6 flex items-center justify-evenly bg-gradient-to-tr from-skiey to-mint rounded-3xl sm:rounded-2xl">
				<Image
					className="w-sm"
					src="/images/icons/star-dude.svg"
					width={512}
					height={512}
					title="Изображение на карточке курса"
					alt="Изображение на карточке курса"
				></Image>
				<h1 className="text-white font-bold text-3xl text-center w-lg">
					Не знаете с чего начать? Попробуйте эти популярные курсы!
				</h1>
			</div>
		</section>
	);
}
