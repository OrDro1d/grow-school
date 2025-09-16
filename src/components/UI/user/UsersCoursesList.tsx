import Link from 'next/link';
import { getCourses } from '@/services/courses';
import UsersCoursesDeleteBtn from './UsersCoursesDeleteBtn';

export default async function UserCoursesList() {
  const courses = await getCourses();

  return (
    <ol>
      {courses.map((course, _index) => (
        <li key={course._id!}>
          <h1>{course.title}</h1>
          <div className='flex'>
            <Link
              className='block px-8 py-2 text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint'
              href={`/course/new/${course._id}`}
            >
              Редактировать
            </Link>
            <UsersCoursesDeleteBtn courseId={course._id!}></UsersCoursesDeleteBtn>
          </div>
        </li>
      ))}
    </ol>
  );
}
