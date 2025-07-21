import WelcomeScreen from "./WelcomeScreen";
import MainCourses from "./MainCourses";

export default function MainBlock() {
	return (
		<section className="flex flex-col items-center  md:items-stretch md:flex-row md:justify-between p-4 mt-14 w-full bg-neutral-100 rounded-b-4xl mx-4">
			<WelcomeScreen></WelcomeScreen>
			<MainCourses></MainCourses>
		</section>
	);
}
