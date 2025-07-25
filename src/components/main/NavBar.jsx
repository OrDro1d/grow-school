import ProfileBtn from "@/components/main/ProfileBtn";
import LogoBtn from "@/components/main/LogoBtn";
import SearchBar from "@/components/main/SearchBar";
import NavBarBtn from "@/components/main/NavBarBtn";
import { cookies } from "next/headers";

export default async function NavBar() {
	const cookieStore = await cookies();
	const userId = cookieStore.get("userId")?.value;

	return (
		<nav className="fixed top-0 left-0 right-0 flex justify-between py-2 px-4 bg-white">
			<div className="flex items-center *:mx-3">
				<LogoBtn></LogoBtn>
				<NavBarBtn href="#" className="hidden sm:block">
					Курсы
				</NavBarBtn>
				<NavBarBtn href="#" className="hidden sm:block">
					Мое обучение
				</NavBarBtn>
				<SearchBar className="hidden sm:block">Поиск по сайту</SearchBar>
			</div>
			<div className="flex items-center">
				{userId ? (
					<ProfileBtn href={`/user/${userId}`}>Мой профиль</ProfileBtn>
				) : (
					<ProfileBtn href="/auth/signup">Войти</ProfileBtn>
				)}
			</div>
		</nav>
	);
}
