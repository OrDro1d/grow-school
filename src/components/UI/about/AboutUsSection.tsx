import AboutUsCard from '@UI/about/AboutUsCard';

export default function AboutUsSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center border-2 border-white/60 bg-white/20 text-white w-fit px-8 md:px-32 py-8 rounded-4xl shadow-xl shadow-black/10 ${className}`}
    >
      <div className='mb-8'>
        <h2 className='mt-4 font-semibold text-2xl md:text-3xl text-center'>
          Что такое Grow School?{' '}
        </h2>
        <p className='text-white/90 mt-4 max-w-96 text-center'>
          Учитесь и создавайте курсы на самые различные темы в нашем онлайн-конструкторе
        </p>
      </div>
      <div className='flex md:flex-row flex-col gap-4'>
        <AboutUsCard>Создавайте курсы</AboutUsCard>
        <AboutUsCard>Проходите курсы</AboutUsCard>
        <AboutUsCard>Станьте частью нашего дружного сообщества</AboutUsCard>
      </div>
    </section>
  );
}
