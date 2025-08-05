import ModulesList from "@/components/create_course/ModulesList";

export default function CourseEditingPage({
	params,
	searchParams
}: {
	params: string;
	searchParams?: string;
}) {
	return (
		<main className="absolute top-14 right-0 bottom-0 left-0 p-8">
			<ModulesList></ModulesList>
		</main>
	);
}
