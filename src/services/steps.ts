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
import { IStep } from "@/types/Step.interface";

export async function saveStep(stepData: IStep): Promise<void> {
	const newStep = new Step({
		lesson: stepData.lesson,
		title: stepData.title
	});
	await newStep.save();
}
