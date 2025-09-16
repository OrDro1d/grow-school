'use client';

import type { IModuleContentClient } from '@/types/Module.interface';

export default function AddLessonBtn({
  children,
  moduleData,
  addLessonAction,
  className,
}: {
  children: React.ReactNode;
  moduleData: IModuleContentClient;
  addLessonAction: (courseId: string, moduleId: string) => Promise<void>;
  className?: string;
}) {
  return (
    <button
      type='button'
      className={`block mt-2 px-8 py-2 text-nowrap mx-auto text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint ${className}`}
      onClick={() => addLessonAction(moduleData.courseId, moduleData._id)}
    >
      {children}
    </button>
  );
}
