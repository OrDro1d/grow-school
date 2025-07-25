import Image from "next/image";
import NavBar from "@/components/main/NavBar";
import WelcomeScreen from "@/components/main/WelcomeScreen";
import MainCourses from "@/components/main/MainCourses";

export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<main className="">
				<WelcomeScreen></WelcomeScreen>
				<MainCourses></MainCourses>
			</main>
		</>
	);
}
