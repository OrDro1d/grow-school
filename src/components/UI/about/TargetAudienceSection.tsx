import Image from 'next/image';

export default function TargetAudienceSection({ className }: { className?: string }) {
  return (
    <section className={`border-gray-200 max-w-5xl ${className}`}>
      <div className='mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14'>
        <h2 className='text-4xl font-bold tracking-tight text-center mb-16'>Для кого?</h2>
        <div className='mt-6 grid gap-6 md:grid-cols-2'>
          <div className='rounded-2xl border-2 border-gray-200 bg-white p-6'>
            <h3 className='text-xl font-semibold'>Авторам</h3>
            <p className='mt-2 text-sm'>
              Конструктор курсов, приём платежей, сертификаты, аналитика прогресса и обратная связь
              от студентов.
            </p>
            <Image
              className=''
              src='/images/icons/cook.png'
              width={100}
              height={100}
              alt=''
            ></Image>
          </div>
          <div className='rounded-2xl border-2 border-gray-200 bg-white p-6'>
            <h3 className='text-xl font-semibold'>Студентам</h3>
            <p className='mt-2 text-sm'>
              Практико‑ориентированные программы, проекты, дорожные карты и подтверждение
              результатов обучением.
            </p>
            <Image
              className=''
              src='/images/icons/book.png'
              width={100}
              height={100}
              alt=''
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
