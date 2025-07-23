"use server";

import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Course from "@/models/Course";
import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";

export async function getUser(id) {
	await dbConnect();
	const user = User.findById(id);
	return user;
}

export async function saveCourse(courseData) {
	await dbConnect();
	const cookieStore = await cookies();
	const author = cookieStore.get("userId").value;
	const title = courseData.title;
	const existingCourse = await Course.exists({ title, author });
	if (existingCourse)
		await cloudinary.uploader.destroy(data.courseData.coverID);

	throw new Error(
		"Курс с таким же названием и от того же автора уже существует"
	);

	const course = new Course({
		imageURL: courseData.coverURL,
		title: title,
		author: author
	});
	await course.save();
}
