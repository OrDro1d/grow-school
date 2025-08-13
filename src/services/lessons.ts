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
import { ILesson } from "@/types/Lesson.interface";

export async function saveLesson(lessonData: ILesson): Promise<void> {
	const newLesson = new Lesson({
		module: lessonData.module,
		title: lessonData.title
	});
	await newLesson.save();
}
