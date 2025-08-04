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

	const title = courseData.title;
	const author = cookieStore.get("userId")?.value;

	const existingCourse = await Course.exists({ title, author }).lean();
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
	console.log(courseId);
	if (courseId) {
		return courseId._id.toString();
	} else return null;
}

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
