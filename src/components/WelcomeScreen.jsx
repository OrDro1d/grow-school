import MainBlock from "./MainBlock";
import Image from "next/image";

export default function WelcomeScreen() {
	return (
		<div className="flex flex-col items-center px-8 py-4 mx-auto text-xs text-center md:flex-row justify-evenly bg-gradient-to-tr from-skiey to-mint rounded-3xl sm:rounded-2xl">
			<MainBlock></MainBlock>
			<div className="flex flex-col">
				<div className="relative flex self-end text-xs sm:text-sm md:text-base lg:text-lg top-4">
					<Image
						src="/images/logo-white.svg"
						className="w-5"
						width={512}
						height={512}
						alt="Логотип Grow School"
					></Image>
					<span className="ml-1 font-medium text-white">Grow School</span>
				</div>
				<Image
					className="w-xs sm:w-sm md:w-md"
					src="/images/welcome.svg"
					width={512}
					height={512}
					alt="Встречающая пользователя картинка. Человечек с цветком в руках"
				></Image>
			</div>
		</div>
	);
}
