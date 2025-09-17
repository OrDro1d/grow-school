import UserCoursesList from '@UI/user/UsersCoursesList';
import { authGuard } from '@services/auth';
import { getUser } from '@services/users';
import Link from 'next/link';
import type { id } from '@/types/id.type';
import type { IUser } from '@/types/User.interface';

export default async function UserPage({ params }: { params: Promise<{ id: id }> }) {
  await authGuard();

  const { id } = await params;

  const user: IUser | null = await getUser(id);

  return (
    <main className='mx-auto xl:w-xl my-16 border-black border-2 p-8'>
      <div>
        <p> Имя: {user?.name}</p>
        <p> E-Mail: {user?.email}</p>
      </div>
      <Link
        href='/course/new'
        className='border-skiey border-2 rounded-4xl px-8 py-4 mx-auto mt-8 block w-fit'
      >
        Создать курс
      </Link>
      <UserCoursesList></UserCoursesList>
    </main>
  );
}
