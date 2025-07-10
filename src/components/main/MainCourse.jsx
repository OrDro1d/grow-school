import Image from "next/image";

export default function MainCourse() {
	return (
		<section>
			<Image
				width={512}
				height={512}
				title="Изображение на карточке курса"
				alt="Изображение на карточке курса"
			></Image>
			<div>
				<h1>JavaScript для чайников</h1>
				<h2>Разгул Гормонов</h2>
			</div>
		</section>
	);
}
