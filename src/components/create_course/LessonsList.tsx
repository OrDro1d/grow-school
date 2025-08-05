"use client";

export default function LessonsList({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<h2>{children}</h2>
			<ol className="rounded-2xl bg-white shadow-lg shadow-black/10 m-2 p-4"></ol>
		</>
	);
}
