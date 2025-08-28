"use server";
// Подключение Mongoose и базы данных
import mongoose, { HydratedDocument, startSession, Types } from "mongoose";
import { dbConnect } from "@/services/db";
// Подключение файлов с моделями Mongoose
import "@/models/User";
import "@/models/Course";
import "@/models/Module";
import "@/models/Lesson";
import "@/models/Step";
// Модели Mongoose
import User from "@/models/User";
import Course from "@/models/Course";
import Module from "@/models/Module";
import Lesson from "@/models/Lesson";
import Step from "@/models/Step";
// Константы
import { NEW_COURSE_DEFAULTS } from "@/constants/newCourseContent";
// Типы и интерфейсы
import { id } from "@/types/id.type";
import { IUser } from "@/types/User.interface";
import {
	ICourse,
	ICourseClient,
	ICourseContentClient
} from "@/types/Course.interface";
import { IModuleClient, IModuleContentClient } from "@/types/Module.interface";
import { ILessonClient, ILessonContentClient } from "@/types/Lesson.interface";
import { IStepClient } from "@/types/Step.interface";
// Функции и модули
import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { saveAndReturnModule } from "@/services/modules";
import { saveAndReturnLesson } from "@/services/lessons";
import { saveStep } from "@/services/steps";

/**
 * Создает новый курс, сохраняет его в базе данных и возвращает обратно.
 * @param {boolean} opts.blankContent - Создавать ли пустые модуль, урок и шаг для нового курса или нет.
 * @param {ICourseData} courseData - Данные курса.
 * @returns {Promise<ICourseClient>} - Новый курс.
 */
export async function saveAndReturnCourse(
	courseData: ICourseClient,
	opts?: { blankContent?: boolean }
): Promise<ICourseClient> {
	await dbConnect();
	const cookieStore = await cookies();

	const title = courseData.title;
	const author = cookieStore.get("userId")?.value;

	const newCourseClient = await mongoose.connection.transaction(
		async (session) => {
			const existingCourse = await Course.exists({ title, author }).session(
				session
			);
			if (existingCourse) {
				await cloudinary.uploader.destroy(courseData.imageId!);

				throw new Error(
					"Курс с таким же названием и от того же автора уже существует"
				);
			}
			// console.log(courseData);
			const newCourse: HydratedDocument<ICourse> = new Course({
				...courseData,
				author
			});
			// console.log(course);
			await newCourse.save({ session });

			if (opts?.blankContent === true) {
				const newModule: IModuleClient = await saveAndReturnModule(
					{
						courseId: newCourse._id,
						title: NEW_COURSE_DEFAULTS.MODULE_TITLE
					},
					{ session }
				);

				const newLesson: ILessonClient = await saveAndReturnLesson(
					{
						moduleId: newModule._id,
						title: NEW_COURSE_DEFAULTS.LESSON_TITLE
					},
					{ session }
				);
				// console.log(newLesson);
				await saveStep(
					{
						lessonId: newLesson._id,
						content: NEW_COURSE_DEFAULTS.STEP_CONTENT
					},
					{ session }
				);
			}

			const newCourseClient: ICourseClient = {
				_id: newCourse._id.toString(),
				createdAt: newCourse.createdAt?.toDateString(),
				title: newCourse.title,
				imageURL: newCourse.imageURL,
				author: author?.toString()
			};
			// console.log(newCourseClient);
			return newCourseClient;
		}
	);
	return newCourseClient;
}

/**
 * Возвращает все курсы в базе данных.
 *
 * @param {number} opts.limit - Ограничение на количество возвращаемых курсов.
 * @returns {Promise<ICourseData[]>} - Массив курсов.
 */
export async function getCourses(opts?: {
	limit?: number;
}): Promise<ICourseClient[]> {
	await dbConnect();
	let courses: ICourseClient[];
	if (opts?.limit) {
		courses = await Course.find()
			.populate("author", "name")
			.limit(opts.limit)
			.lean()
			.transform((docs) =>
				docs.map((doc) => ({
					...doc,
					_id: doc._id!.toString(),
					author: doc.author?.name,
					title: doc.title,
					imageURL: doc.imageURL
				}))
			);
	} else {
		courses = await Course.find()
			.populate("author", "name")
			.lean()
			.transform((docs) =>
				docs.map((doc) => ({
					...doc,
					_id: doc._id!.toString(),
					author: doc.author?.name,
					title: doc.title,
					imageURL: doc.imageURL
				}))
			);
	}

	// console.log(courses);
	return courses;
}

/**
 * Возвращает курс со всем его содержимым (с модулями, уроками и шагами).
 *
 * @param {id} courseId - id курса.
 * @returns {Promise<ICourseFullClient>} - Полный курс со всем содержимым.
 */
export async function getCourseFull(
	courseId: id
): Promise<ICourseContentClient> {
	await dbConnect();
	// console.log("Идет получение курса");

	const course: ICourseContentClient | null = await Course.findById(courseId)
		.lean<ICourseContentClient>()
		.transform((doc) => ({
			...doc,
			_id: doc!._id.toString(),
			author: doc!.author?.toString(),
			title: doc!.title,
			modules: [] as IModuleContentClient[]
		}));
	if (!course)
		throw new Error(`Курс с переданным id ${courseId} не найден в базе данных`);
	// Получаем модули курса
	course.modules = await Module.find({ courseId: course._id })
		.lean<IModuleContentClient[]>()
		.transform((docs) =>
			docs.map((doc) => ({
				...doc,
				_id: doc._id.toString(),
				title: doc.title,
				courseId: doc.courseId.toString(),
				lessons: [] as ILessonContentClient[]
			}))
		);
	// К модулям курса собираем уроки
	for (const mOdule of course.modules) {
		mOdule.lessons = await Lesson.find({ moduleId: mOdule._id })
			.lean<ILessonContentClient[]>()
			.transform((docs) =>
				docs.map((doc) => ({
					...doc,
					_id: doc._id.toString(),
					title: doc.title,
					moduleId: doc.moduleId.toString(),
					steps: [] as IStepClient[]
				}))
			);
		// К урокам собираем шаги
		for (const lesson of mOdule.lessons) {
			lesson.steps = await Step.find({ lessonId: lesson._id })
				.lean<IStepClient[]>()
				.transform((docs) =>
					docs.map((doc) => ({
						...doc,
						_id: doc._id.toString(),
						content: doc.content,
						lessonId: doc.lessonId.toString()
					}))
				);
		}
	}
	// console.log(course);
	// console.log(course.modules);
	return course;
}

/**
 * Удаляет курс и все связанные модули, уроки и шаги в одной транзакции.
 *
 * @param {id} courseId - ID курса.
 */
export async function deleteCourse(courseId: id): Promise<void> {
	await dbConnect();

	await mongoose.connection.transaction(async (session) => {
		const course: ICourse | null = await Course.findById(courseId)
			.lean<ICourse>()
			.session(session);
		if (!course)
			throw new Error(`Курс с id ${courseId} не найден в базе данных`);
		// Сохраняем публичный ID изображения для удаления в Cloudinary после коммита
		const imageId = course.imageId;

		// Собираем зависимости
		const moduleIds: Types.ObjectId[] = await Module.find({
			courseId
		})
			.distinct("_id")
			.session(session);

		const lessonIds: Types.ObjectId[] = await Lesson.find({
			moduleId: { $in: moduleIds }
		})
			.distinct("_id")
			.session(session);

		// Удаляем в правильном порядке: Steps -> Lessons -> Modules -> Course
		await Step.deleteMany({ lessonId: { $in: lessonIds } }).session(session);

		await Lesson.deleteMany({ moduleId: { $in: moduleIds } }).session(session);

		await Module.deleteMany({ courseId }).session(session);

		await Course.deleteOne({ _id: courseId }).session(session);
		// Удаляем картинку независимо от транзакции

		try {
			await cloudinary.uploader.destroy(imageId!);
		} catch (error) {
			console.log(error, imageId);
		}
	});

	revalidatePath("/");
}
