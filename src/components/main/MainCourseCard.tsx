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
			<section className="flex flex-col p-4 bg-white rounded-2xl hover:border-skiey border-2 border-gray-200 transition-all w-85 shadow-lg hover:shadow-skiey/20 shadow-gray-200">
				<div className="flex items-start gap-2">
					<CldImage
						className="rounded-xl"
						src={courseData.imageURL}
						width={160}
						height={160}
						title={`Картинка карточки курса "${courseData.title}"`}
						alt="Картинка на карточке курса"
						crop="pad"
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
						{courseData.certificate ? (
							<CourseAttribute>С сертификатом</CourseAttribute>
						) : null}
					</div>
				</div>

				<div className="mt-2">
					<div className="h-24">
						<h1 className="font-medium text-md break-words">
							{courseData.title}
						</h1>
						<h2 className="font-regular text-sm  break-words text-text mt-1">
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
