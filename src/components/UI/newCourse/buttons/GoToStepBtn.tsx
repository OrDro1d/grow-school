import Link from "next/link";

export default function GoToStepBtn({
	children,
	href,
	className
}: {
	children: string;
	href: string;
	className?: string;
}) {
	return (
		<Link
			className={`inline-block text-nowrap px-6 py-4 bg-mint/20 hover:bg-mint/40 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl border-2 border-green-400 ${className}`}
			href={href}
		>
			{children}
		</Link>
	);
}
