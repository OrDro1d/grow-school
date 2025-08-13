"use server";

import mongoose from "mongoose";
import { dbConnect } from "@/services/db";

import "@/models/User";
import "@/models/Course";
import "@/models/Module";
import "@/models/Lesson";
import "@/models/Step";

import User from "@/models/User";
import Course from "@/models/Course";
import Module from "@/models/Module";
import Lesson from "@/models/Lesson";
import Step from "@/models/Step";

import { id } from "@/types/id.type";
import { IUser } from "@/types/User.interface";
import { ICourse, ICourseClient } from "@/types/Course.interface";

import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

/**
 * Создает новый курс и сохраняет его в базе данных.
 *
 * @param {ICourseData} courseData - Данные курса.
 */
export async function saveCourse(courseData: ICourseClient): Promise<void> {
	await dbConnect();
	const cookieStore = await cookies();

	const title = courseData.title;
	const author = cookieStore.get("userId")?.value;

	const existingCourse = await Course.exists({ title, author });
	if (existingCourse) {
		await cloudinary.uploader.destroy(courseData.imageURL);

		throw new Error(
			"Курс с таким же названием и от того же автора уже существует"
		);
	}
	// console.log(courseData);
	const course = new Course({
		...courseData,
		author
	});
	// console.log(course);
	await course.save();
}

/**
 *Возвращает id курса по его названию.

 * @param {string} title - Название курса.
 * @returns {id} - id курса.
 */
export async function getCourseId(title: string): Promise<string | null> {
	interface CourseId {
		_id: id;
	}
	const courseId: CourseId | null = await Course.findOne(
		{
			title: title
		},
		"_id"
	).lean<CourseId>();
	// console.log(courseId);
	if (courseId) {
		return courseId._id.toString();
	} else return null;
}

/**
 * Возвращает все курсы в базе данных.
 *
 * @param {number} limit - Ограничение на количество возвращаемых курсов.
 * @returns {Promise<ICourseData[]>} - Массив курсов.
 */
export async function getCourses(limit: number = 6): Promise<ICourseClient[]> {
	await dbConnect();
	const courses: ICourseClient[] = await Course.find()
		.populate("author", "name")
		.limit(limit)
		.lean()
		.transform((docs) =>
			docs.map((doc) => ({
				...doc,
				_id: doc._id?.toString(),
				author: doc.author?.name,
				title: doc.title,
				imageURL: doc.imageURL
			}))
		);
	// console.log(courses);
	return courses;
}

/**
 * Удаляет курс и все связанные модули, уроки и шаги в одной транзакции.
 *
 * @param {id} courseId - ID курса.
 */
export async function deleteCourse(courseId: id): Promise<void> {
	await dbConnect();

	const session = await mongoose.startSession();

	try {
		await session.withTransaction(async () => {
			const course = await Course.findById(courseId)
				.lean<ICourse>()
				.session(session);
			if (!course) throw new Error("Курс не найден");

			// Сохраняем публичный ID изображения для удаления в Cloudinary после коммита
			const imageURL = course.imageURL;

			// Собираем зависимости
			const moduleIds = await Module.find({ course: courseId })
				.distinct("_id")
				.session(session);

			const lessonIds =
				moduleIds.length > 0
					? await Lesson.find({ module: { $in: moduleIds } })
							.distinct("_id")
							.session(session)
					: [];

			// Удаляем в правильном порядке: Steps -> Lessons -> Modules -> Course
			await Step.deleteMany(
				lessonIds.length ? { lesson: { $in: lessonIds } } : { _id: null }
			).session(session);

			await Lesson.deleteMany(
				moduleIds.length ? { module: { $in: moduleIds } } : { _id: null }
			).session(session);

			await Module.deleteMany({ course: courseId }).session(session);

			await Course.deleteOne({ _id: courseId }).session(session);

			try {
				await cloudinary.uploader.destroy(imageURL);
			} catch (error) {
				console.log(error);
			}
		});

		// Вне транзакции: удаляем ресурс в Cloudinary (ошибка не ломает процесс)

		revalidatePath("/");
	} finally {
		session.endSession();
	}
}
