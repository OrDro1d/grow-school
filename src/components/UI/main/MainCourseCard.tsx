'use client'

import { ICourseClient } from '@/types/Course.interface'

import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

import CourseAttribute from '@/components/UI/main/CourseAttribute'
import AddToWishListBtn from './AddToWishListBtn'

export default function MainCoursesCard({ courseData }: { courseData: ICourseClient }) {
  return (
    <Link href="#">
      <section className="flex flex-col p-4 transition-all bg-white border-2 border-gray-200 shadow-lg rounded-2xl hover:border-skiey w-85 hover:shadow-skiey/20 shadow-black/10">
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
          <div className="flex flex-wrap gap-2">
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
            {courseData.recommended ? <CourseAttribute>Рекомендуем</CourseAttribute> : null}
            {courseData.certificate ? <CourseAttribute>С сертификатом</CourseAttribute> : null}
          </div>
        </div>

        <div className="mt-2">
          <div className="h-24">
            <h1 className="font-medium break-words text-md">{courseData.title}</h1>
            <h2 className="mt-1 text-sm break-words font-regular text-text">
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
  )
}
