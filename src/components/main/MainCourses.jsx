import Image from "next/image";
import { getCourses } from "@/lib/actions";
import MainCourseCard from "@/components/main/MainCourseCard";

export default async function MainCourses() {
	const courses = await getCourses();
	console.log(courses);

	return (
		<section
			id="main-courses"
			className="flex flex-col items-center justify-center	"
		>
			{courses.map((course) => (
				<MainCourseCard key={course._id} courseData={course}></MainCourseCard>
			))}
		</section>
	);
}
