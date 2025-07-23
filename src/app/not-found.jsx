// pages/404.tsx
import Link from "next/link";

export default function Custom404() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6 text-center">
			<div className="text-7xl mb-4">📚</div>
			<h1 className="text-5xl font-extrabold text-blue-700">
				Страница не найдена
			</h1>
			<p className="mt-4 text-gray-600 text-lg max-w-md">
				Похоже, вы перешли по несуществующей ссылке. Но не переживайте — знания
				всё ещё рядом!
			</p>

			<div className="mt-8 flex flex-col sm:flex-row gap-4">
				<Link
					href="/"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
				>
					На главную
				</Link>
				<Link
					href="/courses"
					className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
				>
					К курсам
				</Link>
			</div>
		</div>
	);
}
