import Image from 'next/image';

export default function TargetAudienceSection({ className }: { className?: string }) {
  return (
    <section className={`border-gray-200 max-w-5xl w-full ${className}`}>
      <div className='mx-auto max-w-5xl py-10 md:py-14'>
        <h2 className='text-4xl font-bold text-center mb-16'>Для кого?</h2>
        <div className='mt-6 flex flex-col gap-4 w-full'>
          <div className='rounded-2xl border-2 border-gray-200 bg-white px-12 py-8 flex justify-evenly'>
            <div className='flex flex-col'>
              <h3 className='self-start text-xl md:text-2xl font-semibold'>Авторам</h3>
              <p className='self-start mt-2 text-sm md:text-base max-w-128'>
                Конструктор курсов, приём платежей, сертификаты, аналитика прогресса и обратная
                связь от студентов.
              </p>
            </div>
            <Image src='/images/icons/cook.png' width={100} height={100} alt=''></Image>
          </div>
          <div className='rounded-2xl border-2 border-gray-200 bg-white px-12 py-8 flex justify-evenly'>
            <Image src='/images/icons/book.png' width={100} height={100} alt=''></Image>
            <div className='flex flex-col'>
              <h3 className='self-end text-xl md:text-2xl font-semibold'>Студентам</h3>
              <p className='self-end text-right mt-2 text-sm md:text-base max-w-128'>
                Практико‑ориентированные программы, проекты, дорожные карты и подтверждение
                результатов обучением.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
