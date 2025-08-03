import Image from "next/image";
import MainBtn from "@/components/main/MainBtn";

export default function CreateCourseBlock({
	className
}: {
	className?: string;
}) {
	return (
		<section
			className={`flex w-6xl mx-auto bg-gradient-to-tr from-blue-900 to-purple-300 p-12 rounded-2xl justify-center gap-4 ${className}`}
		>
			<div className="flex flex-col gap-4 items-start w-lg">
				<h1 className="text-white font-bold text-4xl">
					Хотите стать автором курсов на Grow School?
				</h1>
				<h2 className="text-white font-medium text-lg">
					На нашей платформе вы сможете легко создавать собственные курсы на
					любые темы!
				</h2>
				<MainBtn href="/course/new">Создать курс</MainBtn>
				<MainBtn href="#">О создании курсов</MainBtn>
			</div>
			<Image
				className="w-sm self-end"
				src="/images/icons/scientists.svg"
				width={638}
				height={398}
				title="Картинка блока создания курсов"
				alt="Умный человек в очках скачать обои"
			></Image>
		</section>
	);
}
