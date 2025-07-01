import Link from "next/link";

export default function ProfileBtn() {
	return (
		<Link
			href="#"
			className="px-8 py-1 text-xs border-2 md:text-base lg:text-lg border-skiey rounded-4xl sm:text-xs"
		>
			Войти
		</Link>
	);
}
