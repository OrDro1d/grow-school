import NavBar from "@UI/global/NavBar";
import WelcomeScreen from "@UI/main/WelcomeScreen";
import MainCourses from "@UI/main/MainCourses";
import AllCourses from "@UI/main/AllCourses";
import CreateCourseBlock from "@UI/main/CreateCourseBlock";
import Footer from "@UI/global/Footer";

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
