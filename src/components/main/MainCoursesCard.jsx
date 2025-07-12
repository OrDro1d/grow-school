import Image from "next/image";
import Link from "next/link";

export default function MainCoursesCard() {
	return (
		<Link href="#">
			<section className="flex flex-col md:flex-row p-2 bg-white rounded-2xl shadow-[0_0_12px_lightgray] hover:shadow-[0_0_12px_#42AAFF] transition-all w-40 sm:w-sm md:w-sm">
				<Image
					className="w-20 h-20 lg:w-30 lg:h-30 rounded-xl"
					src="/images/course-cards-images/javascript-course.png"
					width={512}
					height={512}
					title="Изображение на карточке курса"
					alt="Изображение на карточке курса"
				></Image>
				<div className="*:my-1 px-4 py-2">
					<h1 className="font-medium  text-xs md:text-sm break-words">
						JavaScript для чайников (разработчику этой платформы бы не помешало)
					</h1>
					<h2 className="font-regular text-xs md:text-sm break-words text-text">
						Разгул Гормонов, Разбор Полетов, Mathew Ball
					</h2>
				</div>
			</section>
		</Link>
	);
}
