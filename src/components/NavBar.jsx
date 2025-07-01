import ProfileBtn from "./ProfileBtn";
import LogoBtn from "./LogoBtn";
import Search from "./Search";
import NavBarBtn from "./NavBarBtn";

export default function NavBar() {
	return (
		<nav className="sticky flex justify-between p-4 border-b-2 border-b-neutral-200">
			<div className="flex items-center *:mx-3">
				<LogoBtn></LogoBtn>
				<NavBarBtn href="#" className="hidden sm:block">
					Курсы
				</NavBarBtn>
				<NavBarBtn href="#" className="hidden sm:block">
					Мое обучение
				</NavBarBtn>
				<Search>Поиск по сайту</Search>
			</div>
			<div className="flex items-center">
				<ProfileBtn></ProfileBtn>
			</div>
		</nav>
	);
}
