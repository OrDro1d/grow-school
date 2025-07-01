import Link from "next/link";
import Image from "next/image";

export default function LogoBtn() {
	return (
		<Link href="#" className="flex">
			<Image
				src="/images/logo.svg"
				width={20}
				height={20}
				alt="Логотип Grow School"
			></Image>
			<span className="ml-1 font-medium">Grow School</span>
		</Link>
	);
}
