import MainBtn from '@UI/main/buttons/MainBtn';
import Image from 'next/image';

export default function CourseCreationSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center md:flex-row max-w-5xl mx-auto bg-gradient-to-tr from-blue-900 to-purple-300 p-12 rounded-2xl justify-center gap-4 ${className}`}
    >
      <div className='flex flex-col items-center md:items-start gap-4'>
        <h1 className='text-xl md:text-4xl font-semibold text-white text-center md:text-start'>
          Хотите стать автором курсов?
        </h1>
        <h2 className='text-sm md:text-lg font-normal text-white text-center md:text-start'>
          На нашей платформе вы сможете легко создавать собственные курсы на любые темы!
        </h2>
        <div className='flex md: flex-col gap-4'>
          <MainBtn href='/course/new'>Создать курс</MainBtn>
          <MainBtn href='#'>О создании курсов</MainBtn>
        </div>
      </div>
      <Image
        className='md:self-end w-sm'
        src='/images/icons/scientists.svg'
        width={638}
        height={398}
        title='Картинка блока создания курсов'
        alt='Умный человек в очках скачать обои'
      ></Image>
    </section>
  );
}
