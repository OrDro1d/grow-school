import NavBar from "@/components/other/NavBar";

export default function UserLayout({
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
