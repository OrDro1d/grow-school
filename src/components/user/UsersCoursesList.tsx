import { getCourses } from "@/services/courses";
import Link from "next/link";
import UsersCoursesDeleteBtn from "./UsersCoursesDeleteBtn";

export default async function UserCoursesList() {
	const courses = await getCourses(10);

	return (
		<ol>
			{courses.map((course, index) => (
				<li key={index}>
					<h1>{course.title}</h1>
					<div className="flex">
						<Link
							className="block px-8 py-2 text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint"
							href={`/course/new/${course._id}`}
						>
							Редактировать
						</Link>
						<UsersCoursesDeleteBtn
							courseId={course._id!}
							imageId={course.imageURL!}
						></UsersCoursesDeleteBtn>
					</div>
				</li>
			))}
		</ol>
	);
}
