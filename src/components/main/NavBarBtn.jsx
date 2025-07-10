import Link from "next/link";

export default function NavBarBtn({ children, href }) {
	return (
		<Link
			className="hidden text-xs sm:block sm:text-sm md:text-base"
			href={href}
		>
			{children}
		</Link>
	);
}
