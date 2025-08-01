import SignInBlock from "@/components/auth/SignInBlock";

export default function SignInPage() {
	return (
		<div className="absolute flex items-center justify-between w-[100%] h-[100%] bg-gradient-to-tr from-skiey to-mint p-8">
			<div className="m-16">
				<h1 className="font-extrabold text-6xl text-white my-1">
					Добро пожаловать на Grow School
				</h1>
				<h2 className="font-medium text-3xl text-white">
					Войдите, чтобы начать свое обучение
				</h2>
			</div>
			<main className="h-[100%]">
				<SignInBlock></SignInBlock>
			</main>
		</div>
	);
}
