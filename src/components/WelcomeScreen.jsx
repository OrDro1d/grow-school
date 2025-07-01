import MainBlock from "./MainBlock";
import Image from "next/image";

export default function WelcomeScreen() {
	return (
		<div className="flex justify-evenly bg-gradient-to-tr from-skiey to-mint rounded-2xl m-1 p-4">
			<MainBlock></MainBlock>
			<Image
				className="relative top-5"
				src="/images/welcome.svg"
				width={512}
				height={512}
				alt="Встречающая пользователя картинка. Человечек с цветком в руках"
			></Image>
		</div>
	);
}
