import MainBlockBtn from "@/components/main/WelcomeScreenBtn";

export default function MainBlock() {
	return (
		<section className="flex flex-col mx-2 *:my-1 sm:w-xl">
			<h1 className="text-3xl font-bold text-white sm:text-4xl flex-wrap">
				Каждый день - это новый шанс вырасти над собой
			</h1>
			<h2 className="text-base font-medium text-white sm:text-lg">
				И мы вам в этом поможем. С чего хотите начать?
			</h2>
			<div className="*:m-1">
				<MainBlockBtn>Все курсы</MainBlockBtn>
				<MainBlockBtn>Рекомендованные</MainBlockBtn>
				<MainBlockBtn href="#main-courses">Популярные</MainBlockBtn>
			</div>
		</section>
	);
}
