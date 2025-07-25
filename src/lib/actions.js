"use server";

import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Course from "@/models/Course";
import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";

export async function getUser(id) {
	await dbConnect();
	const user = await User.findById(id).lean();
	return user;
}

export async function saveCourse(courseData) {
	await dbConnect();
	const cookieStore = await cookies();

	const author = cookieStore.get("userId").value;
	const title = courseData.title;
	const price = courseData.price;

	const existingCourse = await Course.exists({ title, author }).lean();
	if (existingCourse) {
		await cloudinary.uploader.destroy(data.courseData.coverID);

		throw new Error(
			"Курс с таким же названием и от того же автора уже существует"
		);
	}

	const course = new Course({
		imageURL: courseData.coverURL,
		title: title,
		price: price,
		author: author
	});
	await course.save();
}

export async function getCourses() {
	// Херотень для получения всех курсов с бд на главную страницу для отрисовки
	await dbConnect();
	const courses = await Course.find().populate("author", "name").lean();
	return courses.map((course) => ({
		...course,
		_id: course._id.toString(),
		author: { ...course.author, _id: course.author._id.toString() }
	}));
}

export async function getAuthor(authorId) {
	await dbConnect();
	const author = await User.findOne({ authorId }).lean();
	console.log(author);
	return {
		...author,
		_id: author._id.toString()
	};
}
