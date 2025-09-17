import PATHS from '@constants/paths';
import { cookies } from 'next/headers';
import Image from 'next/image';
import WelcomeScreenBtn from '@/components/UI/main/buttons/MainBtn';

export default async function WelcomeScreen({ className }: { className?: string }) {
  const cookieStore = await cookies();
  return (
    <header
      className={`flex-col items-center px-2 py-4 mx-2  sm:px-2 sm:py-4 md:px-4 md:py-8 lg:p-8 flex text-center lg:text-start lg:flex-row lg:justify-center bg-gradient-to-tr from-skiey to-mint rounded-3xl gap-4 sm:rounded-2xl lg:mx-auto lg:w-6xl lg:px-24 ${className}`}
    >
      <Image
        className='w-xs'
        src='/images/icons/welcome.svg'
        width={651}
        height={436}
        title='Встречающая на платформе пользователя картинка'
        alt='Встречающий вас на платформе человечек с цветком в руках '
      ></Image>
      <div className='flex-col flex w-fit items-center *:my-2'>
        <h1 className='flex-wrap inline-block text-2xl font-bold text-center text-white w-fit md:text-3xl lg:text-4xl'>
          Каждый день - это новый шанс вырасти над собой
        </h1>

        <h2 className='inline-block text-sm font-medium text-center text-white w-fit md:text-lg'>
          И мы вам в этом поможем! С чего хотите начать?
        </h2>
        <div className='flex gap-2 w-fit'>
          <WelcomeScreenBtn href={PATHS.ALL_COURSES.URL}>
            {PATHS.ALL_COURSES.pathname}
          </WelcomeScreenBtn>
          <WelcomeScreenBtn href={PATHS.RECOMMENDED_COURSES.URL}>
            {PATHS.RECOMMENDED_COURSES.pathname}
          </WelcomeScreenBtn>
          <WelcomeScreenBtn
            href={cookieStore.has('userId') ? PATHS.NEW_COURSE.URL : PATHS.SIGN_UP.URL}
          >
            Создать курс
          </WelcomeScreenBtn>
          <WelcomeScreenBtn href={PATHS.ABOUT.URL}>{PATHS.ABOUT.pathname}</WelcomeScreenBtn>
        </div>
      </div>
    </header>
  );
}
