"use client";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function MainCoursesCard({ courseData }) {
	console.log(courseData);
	return (
		<Link href="#">
			<section className="flex flex-col md:flex-row p-2 bg-white rounded-2xl hover:border-skiey border-2 border-gray-100 transition-all w-40 sm:w-sm md:w-sm lg:w-sm">
				<CldImage
					className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl"
					src={courseData.imageURL}
					width={200}
					height={200}
					title="Изображение на карточке курса"
					alt="Изображение на карточке курса"
				></CldImage>
				<div className="*:my-1 px-4 py-2">
					<h1 className="font-medium  text-xs md:text-xs break-words">
						{courseData.title}
					</h1>
					<h2 className="font-regular text-xs md:text-xs break-words text-text">
						{courseData.author.name}
					</h2>
					<p>{courseData.price}</p>
				</div>
			</section>
		</Link>
	);
}
