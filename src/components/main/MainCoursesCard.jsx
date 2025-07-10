import Image from "next/image";
import Link from "next/link";

export default function MainCourse() {
	return (
		<Link href="#">
			<section className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-skiey/50 transition-all w-64">
				<Image
					className=""
					src="/images/course-cards-images/javascript-course.png"
					width={512}
					height={512}
					title="Изображение на карточке курса"
					alt="Изображение на карточке курса"
				></Image>
				<div className="*:my-1 p-2">
					<h1 className="font-medium break-words">
						JavaScript для чайников (разработчику этой платформы бы не помешало)
					</h1>
					<h2>Разгул Гормонов, Разбор Полетов, Mathew Ball</h2>
				</div>
			</section>
		</Link>
	);
}
