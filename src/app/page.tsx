import { ICourseClient } from '@/types/Course.interface'

import { getCourses } from '@/services/courses'

import { Suspense } from 'react'
import NavBar from '@/components/common/NavBar'
import WelcomeScreen from '@UI/main/WelcomeScreen'
import MainCourses from '@UI/main/MainCourses'
import AllCourses from '@UI/main/AllCourses'
import CreateCourseBlock from '@UI/main/CreateCourseBlock'
import Footer from '@/components/common/Footer'
import MainCoursesPlaceholder from '@UI/main/placeholders/MainCoursesPlaceholder'
import AllCoursesPlaceholder from '@UI/main/placeholders/AllCoursesPlaceholder'

export default function Home() {
  const mainCourses: Promise<ICourseClient[]> = getCourses({ limit: 3 })
  const allCourses: Promise<ICourseClient[]> = getCourses({ limit: 6 })
  return (
    <>
      <NavBar></NavBar>
      <main>
        <WelcomeScreen className="mt-18"></WelcomeScreen>
        <Suspense fallback={<MainCoursesPlaceholder className="mt-14"></MainCoursesPlaceholder>}>
          <MainCourses courses={mainCourses} className="mt-4"></MainCourses>
        </Suspense>
        <Suspense fallback={<AllCoursesPlaceholder className="mt-12"></AllCoursesPlaceholder>}>
          <AllCourses courses={allCourses} className="mt-12"></AllCourses>
        </Suspense>
        <CreateCourseBlock className="mt-18"></CreateCourseBlock>
        <Footer className="mt-18"></Footer>
      </main>
    </>
  )
}
