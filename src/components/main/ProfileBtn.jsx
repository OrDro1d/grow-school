"use client";

import Link from "next/link";

export default function ProfileBtn({ href, children }) {
	return (
		<Link
			href={href}
			className="px-8 py-1 text-xs border-2 md:text-base border-skiey rounded-4xl sm:text-xs"
		>
			{children}
		</Link>
	);
}
