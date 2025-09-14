// pages/404.tsx
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    // Код написан нейронкой. Лучше потом переписать
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-white to-blue-50">
      <div className="mb-4 text-7xl">📚</div>
      <h1 className="text-5xl font-extrabold text-blue-700">Страница не найдена</h1>
      <p className="max-w-md mt-4 text-lg text-gray-600">
        Похоже, вы перешли по несуществующей ссылке. Но не переживайте — знания всё ещё рядом!
      </p>

      <div className="flex flex-col gap-4 mt-8 sm:flex-row">
        <Link
          href="/"
          className="px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          На главную
        </Link>
        <Link
          href="/courses"
          className="px-6 py-3 text-blue-600 transition bg-white border border-blue-600 rounded-lg hover:bg-blue-50"
        >
          К курсам
        </Link>
      </div>
    </div>
  )
}
