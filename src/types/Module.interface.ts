import { Types } from "mongoose";

export interface IModule {
	title: string;
	course: Types.ObjectId;
	lessons?: Types.ObjectId[];
	createdAt?: Date;
	updatedAt?: Date;
}

export interface IModuleClient {
	_id?: string;
	title: string;
	course: string;
	lessons?: string[];
	createdAt?: string;
	updatedAt?: string;
}
