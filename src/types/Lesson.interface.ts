import { Types } from "mongoose";

export interface ILesson {
	title: string;
	module: Types.ObjectId;
	steps?: Types.ObjectId[];
	createdAt?: Date;
	updatedAt?: Date;
}
