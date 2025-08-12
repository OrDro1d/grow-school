import NavBar from "@/components/global/NavBar";

export default function CourseLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar></NavBar>
			{children}
		</>
	);
}
