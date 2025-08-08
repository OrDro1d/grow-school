import { Types } from "mongoose";

export interface IStep {
	title: string;
	lesson: Types.ObjectId;
	content?: string;
	createdAt?: Date;
	updatedAt?: Date;
}
