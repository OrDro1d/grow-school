import Link from 'next/link';

export default function ContactsSection({ className }: { className?: string }) {
  return (
    <section className={`border-t-2 border-gray-200 bg-white px-8 md:px-16 py-16 ${className}`}>
      <h2 className='text-2xl md:text-4xl font-semibold tracking-tight'>
        Остались вопросы? Свяжитесь с нами и мы поможем!
      </h2>
      <div className='mt-4 text-lg'>
        <p className=''>
          Позвонить:{' '}
          <Link className='hover:text-skiey' href='tel:+79780694485'>
            8 (800) 555-35-35
          </Link>
        </p>
        <p className=''>
          Написать:{' '}
          <Link className='hover:text-skiey' href='mailto:lyumanowo@gmail.com'>
            grow@school.com
          </Link>
        </p>
      </div>

      <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
        <Link
          href='/course/new'
          className='inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm text-white hover:bg-gray-800'
        >
          Присоединиться как автор
        </Link>
        <Link
          href='/'
          className='inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 hover:bg-gray-50'
        >
          Начать обучение
        </Link>
      </div>
    </section>
  );
}
