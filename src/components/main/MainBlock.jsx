import WelcomeScreen from "./WelcomeScreen";
import MainCourses from "./MainCourses";

export default function MainBlock() {
	return (
		<section className="flex flex-col items-center  md:items-stretch md:flex-row justify-evenly p-2 mx-2 mt-12 *:my-2 sm:p-4 md:p-8 sm:mx-4 md:mx-8  bg-neutral-100 rounded-b-4xl">
			<WelcomeScreen></WelcomeScreen>
			<MainCourses></MainCourses>
		</section>
	);
}
