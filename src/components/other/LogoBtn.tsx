import Link from "next/link";
import Image from "next/image";

export default function LogoBtn() {
	return (
		<Link
			href="/"
			className="flex text-xs sm:text-sm md:text-base"
			scroll={false}
		>
			<Image
				src="/images/icons/logo.svg"
				className="w-4"
				width={512}
				height={512}
				title="Логотип Grow School"
				alt="Логотип Grow School"
			></Image>
			<span className="ml-2 font-medium">Grow School</span>
		</Link>
	);
}
