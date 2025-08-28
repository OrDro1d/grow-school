import Image from "next/image";
import SignInBlock from "@/components/UI/auth/SignInBlock";

export default function SignInPage() {
	return (
		<div className="absolute flex items-center justify-between w-[100%] h-[100%] bg-gradient-to-tr from-skiey to-mint p-8">
			<div className="m-16 mb-50">
				<div className="flex items-center gap-1 my-8">
					<Image
						src="/images/icons/logo-white.svg"
						title="Логотип Grow School"
						alt="Белый логотип Grow School"
						width={32}
						height={32}
					></Image>
					<p className="font-bold text-white text-2xl">Grow School</p>
				</div>
				<h1 className="font-extrabold text-6xl text-white my-2">
					Добро пожаловать на Grow School
				</h1>
				<h2 className="font-medium text-3xl text-white">
					Войдите, чтобы продолжить свое обучение
				</h2>
			</div>
			<main className="h-[100%]">
				<SignInBlock></SignInBlock>
			</main>
		</div>
	);
}
