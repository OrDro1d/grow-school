import Image from "next/image";

import MainCoursesCard from "@/components/main/MainCoursesCard";

export default function MainCourses() {
	return (
		<section
			id="main-courses"
			className="flex flex-col items-center justify-center	"
		>
			<div className="grid grid-cols-2 grid-rows-1 md:grid-cols-1 md:grid-rows-3  lg:grid-cols-2 lg:grid-rows-3 gap-1 md:flex-col items-center md:items-start *:m-1 nowrap">
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
			</div>
			<div className="mt-2 p-1 flex items-center justify-evenly bg-skiey/80 rounded-3xl sm:rounded-2xl w-sm sm:w-md lg:w-2xl shadow-skiey/30 shadow-xl">
				<h1 className="block text-white font-medium text-sm sm:text-base md:text-lg text-left pl-4 lg:pl-8 w-sm">
					Не знаете с чего начать? Попробуйте эти популярные курсы!
				</h1>
				<Image
					className="w-48 md:w-64"
					src="/images/icons/star-dude.svg"
					width={256}
					height={256}
					title="Картинка меню популярных курсов"
					alt="Изображение меню популярных курсов. Человечек со звездой в руках"
				></Image>
			</div>
		</section>
	);
}
