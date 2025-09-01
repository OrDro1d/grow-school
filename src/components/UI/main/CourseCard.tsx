"use client";

import { ICourseClient } from "@/types/Course.interface";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import AddToWishListBtn from "@UI/main/AddToWishListBtn";

export default function CourseCard({
	courseData
}: {
	courseData: ICourseClient;
}) {
	return (
		<Link href="#">
			<section className="flex flex-col p-4 transition-all bg-white border-2 border-gray-200 shadow-lg rounded-2xl hover:border-skiey w-65 shadow-black/10 hover:shadow-skiey/20">
				<div className="flex items-start gap-2">
					<CldImage
						className="rounded-xl"
						src={courseData.imageURL}
						width={100}
						height={100}
						title={`Картинка карточки курса "${courseData.title}"`}
						alt="Картинка на карточке курса"
						crop="pad"
					></CldImage>
				</div>

				<div className="mt-2">
					<div className="h-24">
						<h1 className="text-sm font-medium break-words">
							{courseData.title}
						</h1>
						<h2 className="mt-1 text-xs break-words font-regular text-text">
							{courseData.author?.toString()}
						</h2>
					</div>
					<div className="flex items-center justify-between">
						{courseData.price ? (
							<p className="font-bold text-skiey">{courseData.price}р.</p>
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
