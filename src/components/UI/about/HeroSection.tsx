import StartLearningBtn from '@UI/about/buttons/StartLearningBtn';
import Image from 'next/image';

export default function HeroSection({ className }: { className?: string }) {
  return (
    <section
      className={`max-w-4xl px-8 pb-10 pt-12 md:px-6 md:pb-14 md:pt-16 flex flex-col items-center text-center text-white ${className}`}
    >
      <Image
        className='pt-4'
        src='images/icons/logo-white.svg'
        width={64}
        height={64}
        alt={'Белое' + ' лого'}
      ></Image>
      <h1 className='mt-4 text-2xl sm:text-3xl md:text-4xl font-bold lg:text-5xl'>
        Учите и учитесь сами на Grow School
      </h1>
      <p className='mt-4 max-w-3xl font-normal text-base md:text-xl'>
        Помогаем создавать, запускать и проходить онлайн‑курсы: удобный редактор, монетизация,
        аналитика и сертификаты в одном месте.
      </p>
      <StartLearningBtn className={'mt-8'}></StartLearningBtn>
    </section>
  );
}
