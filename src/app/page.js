import Image from "next/image";
import WelcomeScreen from "../components/WelcomeScreen";
import NavBar from "../components/NavBar";
export default function Home() {
	return (
		<div className="ml-10 mr-10">
			<NavBar></NavBar>
			<WelcomeScreen></WelcomeScreen>
		</div>
	);
}
