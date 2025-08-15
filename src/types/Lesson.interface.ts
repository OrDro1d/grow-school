import { Types } from "mongoose";
import { IStep, IStepClient } from "@/types/Step.interface";

export interface ILesson {
	_id?: Types.ObjectId | string;
	title: string;
	moduleId: Types.ObjectId | string;
	createdAt?: Date;
}

export interface ILessonClient {
	_id: string;
	title: string;
	moduleId: string;
	createdAt?: string;
}

export interface ILessonContentClient {
	_id: string;
	title: string;
	moduleId: string;
	steps?: IStepClient[];
	createdAt?: string;
}
