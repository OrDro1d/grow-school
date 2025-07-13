import WelcomeScreen from "./WelcomeScreen";
import MainCourses from "./MainCourses";

export default function MainBlock() {
	return (
		<section className="flex flex-col items-center  md:items-stretch md:flex-row md:justify-center p-4 mt-14 gap-2 w-fit bg-neutral-100 rounded-b-4xl">
			<WelcomeScreen></WelcomeScreen>
			<MainCourses></MainCourses>
		</section>
	);
}
