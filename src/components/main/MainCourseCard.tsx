"use client";

import { ICourseData } from "@/types/Course.interface";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

import CourseAttribute from "@/components/main/CourseAttribute";
import AddToWishListBtn from "./AddToWishListBtn";

export default function MainCoursesCard({
	courseData
}: {
	courseData: ICourseData;
}) {
	return (
		<Link href="#">
			<section className="flex flex-col p-4 bg-white rounded-2xl hover:border-skiey border-2 border-gray-100 transition-all w-85 shadow-xl hover:shadow-skiey/20 shadow-neutral-300">
				<div className="flex items-start gap-2">
					<CldImage
						className="rounded-xl"
						src={courseData.imageURL}
						width={160}
						height={160}
						title="Изображение на карточке курса"
						alt="Изображение на карточке курса"
					></CldImage>
					<div className="flex gap-2 flex-wrap">
						{
							// Если курс был создан менее чем 6 месяцев назад, будет считаться новым
							(Number(Date.now()) - Number(courseData.createdAt)) /
							1000 /
							60 /
							60 /
							24 /
							7 /
							30 /
							6 ? (
								<CourseAttribute>Новинка</CourseAttribute>
							) : null
						}
						{courseData.recommended ? (
							<CourseAttribute>Рекомендуем</CourseAttribute>
						) : null}
						{courseData.withCertificate ? (
							<CourseAttribute>С сертификатом</CourseAttribute>
						) : null}
					</div>
				</div>

				<div className="mt-2">
					<div className="h-20">
						<h1 className="font-medium text-md break-words">
							{courseData.title}
						</h1>
						<h2 className="font-regular text-sm  break-words text-text">
							{courseData.author as string}
						</h2>
					</div>
					<div className="flex justify-between items-center">
						{courseData.price ? (
							<p>courseData.price</p>
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
