import NavBar from "@/components/main/NavBar";
import { getUser } from "@/lib/actions/userActions";

export default async function UserPage({ params }) {
	const { id } = await params;

	const user = await getUser(id);

	return (
		<>
			<NavBar></NavBar>
			<main className="mx-auto xl:w-xl my-16 border-black border-2 p-8">
				<p> Имя: {user.name}</p>
				<p> E-Mail: {user.email}</p>
			</main>
		</>
	);
}
