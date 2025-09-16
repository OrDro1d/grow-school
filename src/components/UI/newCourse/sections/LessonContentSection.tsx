// Типы и интерфейсы

import StepContentForm from '@UI/newCourse/forms/StepContentForm';
// Функции и хуки
import LessonTitleInput from '@UI/newCourse/inputs/LessonTitleInput';
import StepsSection from '@UI/newCourse/sections/StepsSection';
import { deleteStepAction, updateLessonTitleAction, updateStepAction } from '@/services/actions';
import type { ILessonContentClient } from '@/types/Lesson.interface';

export default function LessonContentSection({
  initialData,
  params,
  searchParams,
}: {
  initialData: ILessonContentClient;
  params: { courseId: string };
  searchParams: {
    module: string;
    lesson: string;
    step: string;
  };
}) {
  const currentStep = initialData.steps.find((step) => step._id === searchParams.step);

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <LessonTitleInput
          lessonId={initialData._id}
          initialTitle={initialData.title}
          updateLessonTitleAction={updateLessonTitleAction}
        ></LessonTitleInput>
      </div>
      <StepsSection
        courseId={params.courseId}
        searchParams={searchParams}
        initialData={initialData}
      ></StepsSection>
      <StepContentForm
        key={searchParams.step}
        courseId={params.courseId}
        searchParams={searchParams}
        initialData={currentStep!}
        updateStepAction={updateStepAction}
        deleteStepAction={deleteStepAction}
      ></StepContentForm>
    </section>
  );
}
