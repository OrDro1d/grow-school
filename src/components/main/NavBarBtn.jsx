import Link from "next/link";

export default function NavBarBtn({ children, href }) {
	return (
		<Link
			scroll={false}
			className="hidden text-xs sm:block sm:text-sm md:text-base hover:text-skiey transition-all"
			href={href}
		>
			{children}
		</Link>
	);
}
