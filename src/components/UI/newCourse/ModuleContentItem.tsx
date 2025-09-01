import { ILessonClient } from "@/types/Lesson.interface";
import Link from "next/link";

export default function ModuleContentItem({
	lessonData,
	href,
	currentLessonId,
	className
}: {
	lessonData: ILessonClient;
	href: string;
	currentLessonId?: string;
	className?: string;
}) {
	return (
		<Link
			className={`block hover:border-skiey rounded-xl py-1 px-2 border-2 transition-all w-full ${
				lessonData._id === currentLessonId
					? "border-skiey bg-skiey/10"
					: "border-white"
			} ${className}`}
			href={href}
		>
			<li>{lessonData.title}</li>
		</Link>
	);
}
