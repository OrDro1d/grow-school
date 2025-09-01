import Image from "next/image";
import WelcomeScreenBtn from "@UI/main/MainBtn";
import { cookies } from "next/headers";

export default async function WelcomeScreen({
	className
}: {
	className?: string;
}) {
	const cookieStore = await cookies();
	return (
		<header
			className={`flex-col items-center px-2 py-4 sm:px-2 sm:py-4 md:px-4 md:py-8 lg:p-8 flex text-center lg:text-start lg:flex-row lg:justify-center bg-gradient-to-tr from-skiey to-mint rounded-3xl gap-4 sm:rounded-2xl mx-auto lg:w-6xl lg:px-24 ${className}`}
		>
			<Image
				className="w-xs"
				src="/images/icons/welcome.svg"
				width={651}
				height={436}
				title="Встречающая на платформе пользователя картинка"
				alt="Встречающий вас на платформе человечек с цветком в руках "
			></Image>
			<div className="lg:flex-col flex w-fit items-center *:my-2">
				<h1 className="flex-wrap inline-block text-2xl font-bold text-center text-white w-fit md:text-3xl lg:text-4xl">
					Каждый день - это новый шанс вырасти над собой
				</h1>

				<h2 className="inline-block text-sm font-medium text-center text-white w-fit md:text-lg">
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
