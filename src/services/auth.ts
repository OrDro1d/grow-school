import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 *Производит проверку авторизации пользователя. Функция проверяет наличие куки, создаваемого в момент авторизации пользователя, и, в случае его отсутствия, пересылает пользователя на страницу входа.
 */
export async function authGuard(): Promise<void> {
	const cookieStore = await cookies();
	const user = cookieStore.get("userId")?.value;
	if (!user) redirect("/auth/signin");
}
