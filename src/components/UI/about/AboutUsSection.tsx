import AboutUsCard from '@UI/about/AboutUsCard';

export default function AboutUsSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center text-white w-fit px-8 md:px-32 py-8 ${className}`}
    >
      <div className='flex md:flex-row flex-col gap-4'>
        <AboutUsCard>Создавайте курсы</AboutUsCard>
        <AboutUsCard>Проходите курсы</AboutUsCard>
        <AboutUsCard>Станьте частью нашего дружного сообщества</AboutUsCard>
      </div>
    </section>
  );
}
