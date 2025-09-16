import AddModuleBtn from '@UI/newCourse/buttons/AddModuleBtn';
import ModuleTitleInput from '@UI/newCourse/inputs/ModuleTitleInput';
import ModuleContentList from '@UI/newCourse/ModuleContentList';
import { revalidatePath } from 'next/cache';
import { NEW_COURSE_DEFAULTS } from '@/constants/newCourseContent';
import Module from '@/models/Module';
import { saveAndReturnModule } from '@/services/modules';
import type { ICourseContentClient } from '@/types/Course.interface';

export default function CourseContentList({
  initialData,
  params,
  searchParams,
  className,
}: {
  initialData: ICourseContentClient;
  params: { courseId: string };
  searchParams: { module: string; lesson: string; step: string };
  className?: string;
}) {
  /**
   * Изменяет имя модуля с переданным id в базе данных.
   *
   * @param moduleId - id модуля.
   * @param newModuleTitle - Новое название модуля.
   */
  async function updateModuleTitle(moduleId: string, newModuleTitle: string) {
    'use server';
    try {
      await Module.findByIdAndUpdate(moduleId, { title: newModuleTitle });
    } catch (error: unknown) {
      console.log(error instanceof Error ? error.message : error);
    }
  }

  /**
   * Создает новый модуль в базе данных и обновляет страницу для его отображения.
   */
  async function addModuleAction() {
    'use server';
    await saveAndReturnModule(
      {
        courseId: initialData._id,
        title: NEW_COURSE_DEFAULTS.MODULE_TITLE,
      },
      { blankLesson: true },
    );
    revalidatePath(`/course/new/${initialData._id}`);
  }
  return (
    <section
      className={`p-4 overflow-y-scroll bg-gray-100 rounded-2xl w-xs border-16 border-gray-100 h-[80%] ${className}`}
    >
      <ol>
        {initialData.modules.map((module) => (
          <li key={module._id} className='mb-8'>
            <ModuleTitleInput
              moduleId={module._id}
              initialTitle={module.title}
              updateModuleTitleAction={updateModuleTitle}
            ></ModuleTitleInput>
            <ModuleContentList
              initialData={module}
              params={params}
              searchParams={searchParams}
            ></ModuleContentList>
          </li>
        ))}
        <li>
          <AddModuleBtn addModuleAction={addModuleAction}>Добавить модуль</AddModuleBtn>
        </li>
      </ol>
    </section>
  );
}
