"use client";

import { ICourseData } from "@/types/Course.interface";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import AddToWishListBtn from "./AddToWishListBtn";

export default function CourseCard({
	courseData
}: {
	courseData: ICourseData;
}) {
	return (
		<Link href="#">
			<section className="flex flex-col p-4 bg-white rounded-2xl hover:border-skiey border-2 border-gray-100 transition-all w-65 shadow-xl shadow-neutral-300 hover:shadow-skiey/20">
				<div className="flex items-start gap-2">
					<CldImage
						className="rounded-xl"
						src={courseData.imageURL}
						width={100}
						height={100}
						title="Изображение на карточке курса"
						alt="Изображение на карточке курса"
					></CldImage>
				</div>

				<div className="mt-2">
					<div className="h-24">
						<h1 className="font-medium text-sm break-words">
							{courseData.title}
						</h1>
						<h2 className="font-regular text-xs  break-words text-text">
							{courseData.author as string}
						</h2>
					</div>
					<div className="flex justify-between items-center">
						{courseData.price ? (
							<p className="text-skiey font-bold">{courseData.price}р.</p>
						) : (
							<p className="text-green-500">Бесплатно</p>
						)}
						<AddToWishListBtn></AddToWishListBtn>
					</div>
				</div>
			</section>
		</Link>
	);
}
