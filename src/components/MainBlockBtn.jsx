import Link from "next/link";

export default function MainBlockButton({ children }) {
	return (
		<Link
			href="#"
			className="rounded-tl-2xl rounded-tr-xl rounded-br-2xl rounded-bl-xl bg-white/40 p-4"
		>
			{children}
		</Link>
	);
}
