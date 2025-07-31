import Image from "next/image";
import WelcomeScreenBtn from "@/components/main/WelcomeScreenBtn";
import { cookies } from "next/headers";

export default async function WelcomeScreen() {
	const cookieStore = await cookies();
	return (
		<header className="flex-col items-center px-2 py-4 sm:px-2 sm:py-4 md:px-4 md:py-8 lg:p-8 flex text-center lg:text-start lg:flex-row lg:justify-center bg-gradient-to-tr from-skiey to-mint rounded-3xl gap-4 sm:rounded-2xl shadow-skiey/30 shadow-xl mt-20 mx-auto lg:w-6xl lg:px-32">
			<Image
				className=""
				src="/images/icons/welcome.svg"
				width={300}
				height={300}
				title="Встречающая пользователя картинка"
				alt="Встречающая пользователя картинка. Человечек с цветком в руках"
			></Image>
			<div className="lg:flex-col flex w-fit items-center *:my-2">
				<h1 className="inline-block w-fit text-2xl font-bold text-white md:text-3xl lg:text-4xl flex-wrap text-center">
					Каждый день - это новый шанс вырасти над собой
				</h1>

				<h2 className="inline-block w-fit text-sm font-medium text-white md:text-lg text-center">
					И мы вам в этом поможем! С чего хотите начать?
				</h2>
				<div className="flex gap-2 w-fit">
					<WelcomeScreenBtn href="#all-courses">Все курсы</WelcomeScreenBtn>
					<WelcomeScreenBtn href="#recommended-courses">
						Лучшие курсы
					</WelcomeScreenBtn>
					<WelcomeScreenBtn
						href={cookieStore.has("userId") ? "/course/new" : "/auth/signup"}
					>
						Создать курс
					</WelcomeScreenBtn>
					<WelcomeScreenBtn href="#">О нас</WelcomeScreenBtn>
				</div>
			</div>
		</header>
	);
}
