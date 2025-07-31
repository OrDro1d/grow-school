import { id } from "@/types/id.type";
import { IUser } from "@/types/User.interface";

import { getUser } from "@/lib/actions";

import NavBar from "@/components/main/NavBar";
import Link from "next/link";
import { NextResponse } from "next/server";
import { redirect } from "next/dist/server/api-utils";

type Params = { id: id };

export default async function UserPage({ params }: { params: Params }) {
	const { id } = await params;

	const user: IUser | null = await getUser(id);
	if (!user) {
		const res = NextResponse.json({
			error: "Пользователь не авторизован",
			status: 401
		});
		return NextResponse.redirect("/auth/signup");
	}

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
