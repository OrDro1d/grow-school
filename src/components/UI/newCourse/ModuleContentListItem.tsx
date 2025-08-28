import { ILessonClient } from "@/types/Lesson.interface";
import Link from "next/link";

export default function ModuleContentListItem({
	lessonData,
	href,
	currentLessonId
}: {
	lessonData: ILessonClient;
	href: string;
	currentLessonId?: string;
}) {
	return (
		<li
			className={`hover:bg-gray-50 rounded-xl py-1 px-2 border-2  hover:border-gray-200 transition-all ${
				lessonData._id === currentLessonId
					? "border-skiey bg-skiey/20"
					: "border-white"
			} `}
		>
			<Link href={href}>{lessonData.title}</Link>
		</li>
	);
}
