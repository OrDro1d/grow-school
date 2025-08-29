import Link from "next/link";

export default function Step({
	href,
	className
}: {
	href: string;
	className?: string;
}) {
	return <Link className={`${className}`} href={href}></Link>;
}
