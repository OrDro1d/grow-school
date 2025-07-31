"use server";

import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Course from "@/models/Course";

import { id } from "@/types/id.type";
import { IUser } from "@/types/User.interface";
import { ICourse, ICourseData } from "@/types/Course.interface";

import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";

export async function getUser(id: id): Promise<IUser | null> {
	await dbConnect();
	const user: IUser | null = await User.findById(id).lean<IUser>();
	return user;
}

export async function saveCourse(courseData: ICourseData): Promise<void> {
	await dbConnect();
	const cookieStore = await cookies();

	const author = cookieStore.get("userId")?.value;
	const title = courseData.title;
	const price = courseData.price;

	const existingCourse = await Course.exists({ title, author }).lean();
	if (existingCourse) {
		await cloudinary.uploader.destroy(courseData.imageURL);

		throw new Error(
			"Курс с таким же названием и от того же автора уже существует"
		);
	}

	const course = new Course({
		imageURL: courseData.imageURL,
		title: title,
		price: price,
		author: author
	});
	await course.save();
}

export async function getCourses(): Promise<ICourseData[]> {
	// Херотень для получения всех курсов с бд на главную страницу для отрисовки
	await dbConnect();
	const courses: ICourseData[] = await Course.find()
		.populate("author", "name")
		.lean()
		.transform((docs) =>
			docs.map((doc) => ({
				...doc,
				_id: doc._id?.toString(),
				author: doc.author.name,
				title: doc.title,
				imageURL: doc.imageURL
			}))
		);
	// console.log(courses);
	return courses;
}
