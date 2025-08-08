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
import { ICourse, ICourseData } from "@/types/Course.interface";
import { IModule, IModuleClient } from "@/types/Module.interface";
import { ILesson } from "@/types/Lesson.interface";
import { IStep } from "@/types/Step.interface";

import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";

/**
 * Создает новый курс и сохраняет его в базе данных.
 *
 * @param {ICourseData} courseData - Данные курса.
 */
export async function saveCourse(courseData: ICourseData): Promise<void> {
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
export async function getCourses(limit: number = 6): Promise<ICourseData[]> {
	await dbConnect();
	const courses: ICourseData[] = await Course.find()
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
 * Возвращает все модули курса по его id.
 *
 * @param {id} id - id модуля.
 * @returns {Promise<IModuleClient[]>} - Массив модулей курса.
 */
export async function getModules(id: id): Promise<IModuleClient[]> {
	const modules: IModuleClient[] = await Module.find({ course: id })
		.lean()
		.transform((docs) =>
			docs.map((doc) => ({
				...doc,
				_id: doc._id?.toString(),
				title: doc.title,
				course: doc.course.toString()
			}))
		);
	return modules;
}

/**
 * Создает новый модуль курса.
 *
 * @param {IModule} moduleData - Данные модуля.
 */
export async function createModule(moduleData: IModule): Promise<void> {
	const newModule = new Module({
		course: moduleData.course,
		title: moduleData.title
	});

	await newModule.save();
}

/**
 * Создает новый модуль курса и возвращает его в виде плоского JS объекта.
 *
 * @param {IModule} moduleData - Данные для создания нового модуля курса.
 * @returns {IModuleClient} - Новый модуль в виде плоского JS объекта.
 */
export async function createAndReturnModule(
	moduleData: IModule
): Promise<IModuleClient> {
	const newModule = new Module({
		course: moduleData.course,
		title: moduleData.title
	});

	await newModule.save();

	const newModuleClient: IModuleClient = {
		course: newModule.course.toString(),
		title: newModule.title
	};

	return newModuleClient;
}

export async function createLesson(lessonData: ILesson): Promise<void> {
	const newLesson = new Lesson({
		module: lessonData.module,
		title: lessonData.title
	});
	await newLesson.save();
}

export async function createStep(stepData: IStep): Promise<void> {
	const newLesson = new Lesson({
		lesson: stepData.lesson,
		title: stepData.title
	});
	await newLesson.save();
}
