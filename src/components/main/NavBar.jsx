import ProfileBtn from "@/components/main/ProfileBtn";
import LogoBtn from "@/components/main/LogoBtn";
import Search from "@/components/main/Search";
import NavBarBtn from "@/components/main/NavBarBtn";

export default function NavBar() {
	return (
		<nav className="fixed top-0 left-0 right-0 flex justify-between py-2 px-4 border-b-2 border-b-neutral-200 bg-white">
			<div className="flex items-center *:mx-3">
				<LogoBtn></LogoBtn>
				<NavBarBtn href="#" className="hidden sm:block">
					Курсы
				</NavBarBtn>
				<NavBarBtn href="#" className="hidden sm:block">
					Мое обучение
				</NavBarBtn>
				<Search className="hidden sm:block">Поиск по сайту</Search>
			</div>
			<div className="flex items-center">
				<ProfileBtn href="/auth/signup">Войти</ProfileBtn>
			</div>
		</nav>
	);
}
