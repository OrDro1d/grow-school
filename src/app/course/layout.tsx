import NavBar from "@UI/global/NavBar";

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
