'use client';

import { deleteCourse } from '@/services/courses';
import type { id } from '@/types/id.type';

export default function UsersCoursesDeleteBtn({
  courseId,
  className,
}: {
  courseId: id;
  className?: string;
}) {
  return (
    <button
      className={`block px-4 py-2 text-sm transition-all bg-white border-2 border-red-500 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-red-500 hover:border-red-700 ${className}`}
      type='button'
      onClick={() => deleteCourse(courseId)}
    >
      🗑️
    </button>
  );
}
