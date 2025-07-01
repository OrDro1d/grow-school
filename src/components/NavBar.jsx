import Link from "next/link";
import ProfileBtn from "./ProfileBtn";
import LogoBtn from "./LogoBtn";

export default function NavBar() {
	return (
		<nav className="sticky flex justify-between">
			<div className="flex p-4 *:m-2">
				<LogoBtn></LogoBtn>
				<Link href="#">Каталог</Link>
				<Link href="#">Мое обучение</Link>
			</div>
			<ProfileBtn className="m-4"></ProfileBtn>
		</nav>
	);
}
