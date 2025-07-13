import Image from "next/image";
import WelcomeScreenBtn from "@/components/main/WelcomeScreenBtn";

export default function WelcomeScreen() {
	return (
		<header className="flex-col items-center px-2 py-4 sm:px-2 sm:py-4 md:px-4 md:py-8 lg:p-8 lg:py-16 text-center lg:flex-row bg-gradient-to-tr from-skiey to-mint rounded-3xl sm:rounded-2xl w-sm md:w-xl md:min-w-sm lg:w-xl lg:min-w-lg shadow-skiey/30 shadow-xl">
			<h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl flex-wrap">
				Каждый день - это новый шанс вырасти над собой
			</h1>

			<Image
				className="w-64 sm:w-xs mx-auto my-2 lg:my-8"
				src="/images/icons/welcome.svg"
				width={512}
				height={512}
				title="Встречающая пользователя картинка"
				alt="Встречающая пользователя картинка. Человечек с цветком в руках"
			></Image>

			<h2 className="text-sm font-medium text-white md:text-lg">
				И мы вам в этом поможем. <br></br> С чего хотите начать?
			</h2>
			<div className="my-2 *:m-1">
				<WelcomeScreenBtn>Все курсы</WelcomeScreenBtn>
				<WelcomeScreenBtn>Рекомендованные</WelcomeScreenBtn>
				<WelcomeScreenBtn href="#main-courses">Популярные</WelcomeScreenBtn>
			</div>
		</header>
	);
}
