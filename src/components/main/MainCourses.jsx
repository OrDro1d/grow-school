import Image from "next/image";

import MainCoursesCard from "@/components/main/MainCoursesCard";

export default function MainCourses() {
	return (
		<section id="main-courses" className="flex flex-col items-center">
			<div className="flex flex-row md:flex-col items-center md:items-start *:m-1">
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
				<MainCoursesCard></MainCoursesCard>
			</div>
			<div className="mt-2 p-1 flex items-center justify-evenly bg-skiey/80 rounded-3xl sm:rounded-2xl w-md sm:w-md shadow-skiey/30 shadow-xl">
				<h1 className="block text-white font-medium text-sm sm:text-base md:text-lg text-left pl-4 ">
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
