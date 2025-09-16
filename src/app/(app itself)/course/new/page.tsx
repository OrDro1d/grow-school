import CourseDataForm from '@/components/UI/newCourse/forms/CourseDataForm';
import { authGuard } from '@/services/auth';

export default async function NewCoursePage() {
  await authGuard();

  return (
    <main className='mt-16'>
      <CourseDataForm></CourseDataForm>
    </main>
  );
}
