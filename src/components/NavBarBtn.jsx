import Link from "next/link";

export default function NavBarBtn({ children, href }) {
	return (
		<Link
			className="hidden text-xs sm:block sm:text-sm md:text-base lg:text-lg"
			href={href}
		>
			{children}
		</Link>
	);
}
