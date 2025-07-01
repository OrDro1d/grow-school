import MainBlockBtn from "./MainBlockBtn";

export default function MainBlock() {
	return (
		<div className="">
			<h1>Каждый день - новый шанс учиться новому</h1>
			<h2>И мы вам в этом поможем. С чего хотите начать?</h2>
			<div className="*:m-2">
				<MainBlockBtn>Все курсы</MainBlockBtn>
				<MainBlockBtn>Рекомендованные</MainBlockBtn>
				<MainBlockBtn>Популярные</MainBlockBtn>
			</div>
		</div>
	);
}
