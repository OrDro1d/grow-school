import Image from "next/image";
import WelcomeScreen from "../components/WelcomeScreen";
import NavBar from "../components/NavBar";
export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<div className="p-2 mx-2 sm:p-4 md:p-8 sm:mx-4 md:mx-8 lg:mx-16 bg-neutral-100 rounded-b-4xl">
				<WelcomeScreen></WelcomeScreen>
			</div>
		</>
	);
}
