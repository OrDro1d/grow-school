import TargetAudienceCard from '@UI/about/TargetAudienceCard';

export default function TargetAudienceSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col items-center p-2 sm:p-8 md:p-16 bg-white border-t-2 border-gray-200 w-full ${className}`}
    >
      <div className='mx-auto w-full py-10'>
        <h2 className='text-5xl font-bold text-center mb-16  text-skiey rounded-xl bg-gray-50 py-4 w-[70%] mx-auto'>
          Для кого?
        </h2>
        <div className='mt-6 flex flex-col gap-4 max-w-5xl mx-auto'>
          <TargetAudienceCard
            className={'mr-auto'}
            title={'Авторам'}
            text={
              'Конструктор курсов, приём платежей, сертификаты, аналитика прогресса и обратная' +
              ' связь от студентов.'
            }
            btnText={'Создать курс'}
            imageSrc={'/images/icons/cook.png'}
          />
          <TargetAudienceCard
            className={'ml-auto'}
            title={'Студентам'}
            text={
              'Практико‑ориентированные программ' +
              ' проекты, дорожные карты и подтверждение результатов обучением.'
            }
            btnText={'Начать учиться'}
            imageSrc={'/images/icons/book.png'}
            flip={true}
          />
        </div>
      </div>
    </section>
  );
}
