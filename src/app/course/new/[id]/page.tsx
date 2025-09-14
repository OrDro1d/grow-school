// Модели и связь с бд
import Course from '@/models/Course'
// Типы и интерфейсы
import { ICourse } from '@/types/Course.interface'
// Функции и хуки
import { authGuard } from '@/services/auth'
import { getCourseFull } from '@/services/courses'
import { redirect } from 'next/navigation'
// Компоненты
import { Suspense } from 'react'
import Header from '@UI/newCourse/Header'
import CourseEditingSection from '@UI/newCourse/sections/CourseEditingSection'

export default async function CourseEditingPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{
    module: string
    lesson: string
    step: string
  }>
}) {
  await authGuard()

  const { id: courseId } = await params
  // console.log(searchParamsData);
  const course: ICourse | null = await Course.findById(courseId).lean<ICourse>()
  // console.log(course);
  if (!course) {
    redirect('/not-found')
  }

  const courseInitialData = getCourseFull(courseId)

  return (
    <main className="absolute bottom-0 left-0 right-0 px-8 py-4 overflow-hidden top-14">
      <Header courseTitle={course.title}></Header>
      <Suspense
        fallback={
          <div>
            <p>Загрузка данных о курсе...</p>
          </div>
        }
      >
        <CourseEditingSection
          initialData={courseInitialData}
          params={{ courseId }}
          searchParams={searchParams}
        ></CourseEditingSection>
      </Suspense>
    </main>
  )
}
