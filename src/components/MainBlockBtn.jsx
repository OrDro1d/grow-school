import Link from "next/link";

export default function MainBlockButton({ children }) {
	return (
		<Link
			href="#"
			className="inline-block px-6 py-3 text-white border-2 rounded-tr-lg rounded-bl-lg border-white/40 rounded-tl-4xl rounded-br-4xl bg-white/40 hover:border-2 hover:border-white"
		>
			{children}
		</Link>
	);
}
