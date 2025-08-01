import NavBar from "@/components/other/NavBar";
import WelcomeScreen from "@/components/main/WelcomeScreen";
import MainCourses from "@/components/main/MainCourses";
import AllCourses from "@/components/main/AllCourses";

export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<main className="">
				<WelcomeScreen></WelcomeScreen>
				<MainCourses></MainCourses>
				<AllCourses></AllCourses>
			</main>
		</>
	);
}
