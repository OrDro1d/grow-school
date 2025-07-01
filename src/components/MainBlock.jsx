import MainBlockBtn from "./MainBlockBtn";

export default function MainBlock() {
	return (
		<div className="flex flex-col w-2xl *:my-1">
			<h1 className="text-4xl font-bold text-white">
				Каждый день - новый шанс вырасти над собой
			</h1>
			<h2 className="text-2xl font-medium text-white">
				И мы вам в этом поможем. С чего хотите начать?
			</h2>
			<div className="*:m-1">
				<MainBlockBtn>Все курсы</MainBlockBtn>
				<MainBlockBtn>Рекомендованные</MainBlockBtn>
				<MainBlockBtn>Популярные</MainBlockBtn>
			</div>
		</div>
	);
}
