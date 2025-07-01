import Link from "next/link";
import ProfileBtn from "./ProfileBtn";
import LogoBtn from "./LogoBtn";
import Search from "./Search";

export default function NavBar() {
	return (
		<nav className="sticky flex justify-between p-4">
			<div className="flex items-center *:mx-3">
				<LogoBtn></LogoBtn>
				<Link href="#">Каталог</Link>
				<Link href="#">Мое обучение</Link>
				<Search>Поиск по сайту</Search>
			</div>
			<div className="flex items-center">
				<ProfileBtn></ProfileBtn>
			</div>
		</nav>
	);
}
