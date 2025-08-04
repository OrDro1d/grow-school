"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
	return (
		<footer
			className={`flex justify-evenly text-gray-600 bg-gray-200 p-16 text-sm ${className}`}
		>
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<Image
						className="w-4"
						src="/images/icons/logo-black.svg"
						title="Логотип Grow School"
						alt="Черный логотип Grow School"
						width={394}
						height={422}
					></Image>
					<h2 className="font-medium">Grow School</h2>
				</div>
				<p className="w-sm">
					Наша задача - предоставлять удобный сервис для саморазвития и
					самореализации со всесторонней поддержкой наших пользователей на
					каждом шагу.
				</p>
			</div>
			<div className="flex flex-col gap-2 *:transition-all">
				<h2 className="font-medium">Дополнительные ссылки</h2>
				<Link className="hover:text-skiey" href="#main-courses">
					Популярные курсы
				</Link>
				<Link className="hover:text-skiey" href="#all-courses">
					Все курсы
				</Link>
				<Link className="hover:text-skiey" href="#">
					Найти курс
				</Link>
				<Link className="hover:text-skiey" href="/course/new">
					Создать курс
				</Link>
				<Link className="hover:text-skiey" href="#">
					О создании курсов
				</Link>
				<Link className="hover:text-skiey" href="#">
					О нас
				</Link>
			</div>
			<div className="flex flex-col gap-2 *:transition-all">
				<h2 className="font-medium">Связаться с нами</h2>
				<p className="w-xs">
					Ленинградская обл., г. Санкт-Петербург, ул. Пушкина, д. Колотушкина
				</p>
				<Link className="hover:text-skiey" href="tel:+79780694485">
					8 (978) 069-44-85
				</Link>
				<Link className="hover:text-skiey" href="mailto:lyumanowo@gmail.com">
					lyumanowo@gmail.com
				</Link>
				<button
					className="text-sm cursor-pointer bg-white rounded-4xl w-fit py-2 px-8 shadow-lg hover:bg-gray-100 border-2 hover:border-gray-300 border-gray-200"
					type="button"
					onClick={() => alert("Когда-то будет. Клянусь")}
				>
					Подписаться на рассылку
				</button>
				<p className="w-sm text-xs font-light">
					Вы можете подписаться на рассылку новостей от Grow School, чтобы
					первыми узнавать о новых курсах, акциях, обновлениях и прочих новостях
					на платформе
				</p>
			</div>
		</footer>
	);
}
