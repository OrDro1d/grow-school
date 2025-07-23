import NavBar from "@/components/main/NavBar";
import Link from "next/link";
import { getUser } from "@/lib/actions";

export default async function UserPage({ params }) {
	const { id } = await params;

	const user = await getUser(id);

	return (
		<>
			<NavBar></NavBar>
			<main className="mx-auto xl:w-xl my-16 border-black border-2 p-8">
				<div>
					<p> Имя: {user.name}</p>
					<p> E-Mail: {user.email}</p>
				</div>
				<Link
					href="/course/new"
					className="border-skiey border-2 rounded-4xl px-8 py-4 mx-auto mt-8 block w-fit"
				>
					Создать курс
				</Link>
			</main>
		</>
	);
}
