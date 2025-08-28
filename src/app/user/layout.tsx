import NavBar from "@UI/global/NavBar";

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
