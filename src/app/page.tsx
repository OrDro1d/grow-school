import NavBar from "@/components/other/NavBar";
import WelcomeScreen from "@/components/main/WelcomeScreen";
import MainCourses from "@/components/main/MainCourses";
import AllCourses from "@/components/main/AllCourses";
import CreateCourseBlock from "@/components/main/CreateCourseBlock";
import Footer from "@/components/other/Footer";

export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<main className="">
				<WelcomeScreen className="mt-18"></WelcomeScreen>
				<MainCourses className="mt-4"></MainCourses>
				<AllCourses className="mt-12"></AllCourses>
				<CreateCourseBlock className="mt-18"></CreateCourseBlock>
				<Footer className="mt-18"></Footer>
			</main>
		</>
	);
}
