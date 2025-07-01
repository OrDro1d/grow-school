import Link from "next/link";
import Image from "next/image";

export default function LogoBtn() {
	return (
		<Link href="#" className="flex text-xs sm:text-sm md:text-base lg:text-lg">
			<Image
				src="/images/logo.svg"
				className="w-4 md:w-5"
				width={512}
				height={512}
				alt="Логотип Grow School"
			></Image>
			<span className="ml-1 font-medium">Grow School</span>
		</Link>
	);
}
