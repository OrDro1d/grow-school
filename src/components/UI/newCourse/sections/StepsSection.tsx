import { ILessonContentClient } from "@/types/Lesson.interface";
import GoToStepBtn from "@UI/newCourse/buttons/GoToStepBtn";
import AddStepBtn from "@UI/newCourse/buttons/AddStepBtn";
import { addStepAction } from "@/services/actions";

export default function StepsSection({
	courseId,
	searchParams,
	initialData,
	className
}: {
	courseId: string;
	searchParams: {
		module: string;
		lesson: string;
		step: string;
	};
	initialData: ILessonContentClient;
	className?: string;
}) {
	return (
		<section className={`flex gap-4 ${className}`}>
			{initialData.steps.map((step, index) => (
				<GoToStepBtn
					className={`${step._id === searchParams.step ? "bg-mint/80" : null}`}
					key={step._id}
					href={`/course/new/${courseId}/?module=${searchParams.module}&lesson=${searchParams.lesson}&step=${step._id}`}
				>
					{`Шаг ${index + 1}`}
				</GoToStepBtn>
			))}
			<AddStepBtn
				courseId={courseId}
				lessonId={searchParams.lesson}
				addStepAction={addStepAction}
			>
				{"Добавить шаг ➕"}
			</AddStepBtn>
		</section>
	);
}
