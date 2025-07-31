"use client";

import { ICourse, ICourseData } from "@/types/Course.interface";

import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import CourseAttribute from "@/components/main/CourseAttribute";

export default function MainCoursesCard({
	courseData
}: {
	courseData: ICourseData;
}) {
	return (
		<Link href="#">
			<section className="flex flex-col p-4 bg-white rounded-2xl hover:border-skiey border-2 border-gray-100 transition-all w-sm shadow-xl hover:shadow-skiey/20">
				<div className="flex items-start gap-2">
					<CldImage
						className="rounded-xl"
						src={courseData.imageURL}
						width={160}
						height={100}
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
					<div className="">
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
						<button
							type="button"
							className="rounded-4xl border-2 border-skiey px-6 py-2 w-fit"
						>
							💖
						</button>
					</div>
				</div>
			</section>
		</Link>
	);
}
