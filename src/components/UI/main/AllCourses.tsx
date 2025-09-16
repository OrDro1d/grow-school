import { use } from 'react';
import CourseCard from '@/components/UI/main/CourseCard';
import type { ICourseClient } from '@/types/Course.interface';

export const revalidate = 60;

export default function AllCourses({
  courses,
  className,
}: {
  courses: Promise<ICourseClient[]>;
  className?: string;
}) {
  const coursesData = use(courses);

  return (
    <section className={`w-fit mx-auto mt-8 ${className}`}>
      <h2 className='inline-block text-4xl font-bold'>Все курсы</h2>
      <div
        id='all-courses'
        className='grid flex-wrap grid-cols-3 grid-rows-2 gap-4 p-8 my-4 bg-neutral-100 rounded-2xl w-fit'
      >
        {coursesData.map((course) => (
          <CourseCard key={course._id as React.Key} courseData={course}></CourseCard>
        ))}
      </div>
    </section>
  );
}
