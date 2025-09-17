import Link from 'next/link';

export default function ContactsSection() {
  return (
    <section className='border-t border-gray-200 '>
      <div className='mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14'>
        <div className='rounded-2xl border border-gray-200 bg-white p-6'>
          <h2 className='text-2xl font-semibold tracking-tight'>Контакты</h2>
          <p className='mt-2 text-gray-700'>Партнёрства и предложения: hello@grow.school</p>
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
        </div>
      </div>
    </section>
  );
}
