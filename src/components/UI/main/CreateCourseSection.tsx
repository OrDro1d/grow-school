import Image from 'next/image';
import MainBtn from '@/components/UI/main/buttons/MainBtn';

export default function CreateCourseSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex w-6xl mx-auto bg-gradient-to-tr from-blue-900 to-purple-300 p-12 rounded-2xl justify-center gap-4 ${className}`}
    >
      <div className='flex flex-col items-start gap-4 w-lg'>
        <h1 className='text-4xl font-bold text-white'>
          Хотите стать автором курсов на Grow School?
        </h1>
        <h2 className='text-lg font-medium text-white'>
          На нашей платформе вы сможете легко создавать собственные курсы на любые темы!
        </h2>
        <MainBtn href='/course/new'>Создать курс</MainBtn>
        <MainBtn href='#'>О создании курсов</MainBtn>
      </div>
      <Image
        className='self-end w-sm'
        src='/images/icons/scientists.svg'
        width={638}
        height={398}
        title='Картинка блока создания курсов'
        alt='Умный человек в очках скачать обои'
      ></Image>
    </section>
  );
}
