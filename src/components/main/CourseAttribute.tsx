export default function CourseAttribute({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<p className="inline-block rounded-4xl bg-gray-200 py-2 px-4 text-sm">
			<span>{children}</span>
		</p>
	);
}
