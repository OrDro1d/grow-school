import MainBlock from "./MainBlock";
import Image from "next/image";

export default function WelcomeScreen() {
	return (
		<div className="flex px-24 py-10 m-auto justify-evenly bg-gradient-to-tr from-skiey to-mint rounded-2xl w-7xl h-70">
			<MainBlock></MainBlock>
			<div className="flex flex-col">
				<div className="flex self-end">
					<Image
						src="/images/logo-white.svg"
						width={20}
						height={20}
						alt="Логотип Grow School"
					></Image>
					<span className="ml-1 font-medium text-white">Grow School</span>
				</div>
				<Image
					className="relative bottom-4"
					src="/images/welcome.svg"
					width={512}
					height={512}
					alt="Встречающая пользователя картинка. Человечек с цветком в руках"
				></Image>
			</div>
		</div>
	);
}
