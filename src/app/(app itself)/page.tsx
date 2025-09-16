import AllCourses from '@UI/main/AllCourses';
import MainCourses from '@UI/main/MainCourses';
import AllCoursesPlaceholder from '@UI/main/placeholders/AllCoursesPlaceholder';
import MainCoursesPlaceholder from '@UI/main/placeholders/MainCoursesPlaceholder';
import WelcomeScreen from '@UI/main/WelcomeScreen';
import { Suspense } from 'react';
import Footer from '@/components/common/Footer';
import CreateCourseSection from '@/components/UI/main/CreateCourseSection';
import { getCourses } from '@/services/courses';
import type { ICourseClient } from '@/types/Course.interface';

export default function Home() {
  const mainCourses: Promise<ICourseClient[]> = getCourses({ limit: 3 });
  const allCourses: Promise<ICourseClient[]> = getCourses({ limit: 6 });
  return (
    <main>
      <WelcomeScreen className='mt-18'></WelcomeScreen>
      <Suspense fallback={<MainCoursesPlaceholder className='mt-14'></MainCoursesPlaceholder>}>
        <MainCourses courses={mainCourses} className='mt-4'></MainCourses>
      </Suspense>
      <Suspense fallback={<AllCoursesPlaceholder className='mt-12'></AllCoursesPlaceholder>}>
        <AllCourses courses={allCourses} className='mt-12'></AllCourses>
      </Suspense>
      <CreateCourseSection className='mt-18'></CreateCourseSection>
      <Footer className='mt-18'></Footer>
    </main>
  );
}
