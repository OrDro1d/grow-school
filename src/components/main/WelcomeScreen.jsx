import WelcomeScreenText from "@/components/main/WelcomeScreenText";
import Image from "next/image";

export default function WelcomeScreen() {
	return (
		<header className="flex flex-col items-center px-8 py-4 sm:px-12 sm:py-6 mx-auto text-xs text-center lg:flex-row justify-evenly bg-gradient-to-tr from-skiey to-mint rounded-3xl sm:rounded-2xl">
			<WelcomeScreenText></WelcomeScreenText>
			<div className="flex flex-col place-items-end">
				<div className="relative flex self-end text-xs sm:text-sm md:text-base lg:text-lg top-4">
					<Image
						src="/images/icons/logo-white.svg"
						className="w-5"
						width={512}
						height={512}
						alt="Логотип Grow School"
					></Image>
					<span className="ml-1 font-medium text-white">Grow School</span>
				</div>
				<Image
					className="w-xs sm:w-xs"
					src="/images/icons/welcome.svg"
					width={512}
					height={512}
					alt="Встречающая пользователя картинка. Человечек с цветком в руках"
				></Image>
			</div>
		</header>
	);
}
