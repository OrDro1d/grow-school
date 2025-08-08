import { Types } from "mongoose";

export interface ICourse {
	title: string;
	imageURL: string;
	author?: Types.ObjectId;
	createdAt?: Date;
	updatedAt?: Date;
	recommended?: boolean;
	certificate?: boolean;
	length?: number;
	students?: number;
	price?: number;
	published?: boolean;
	modules?: Types.ObjectId[];
}

export interface ICourseData extends ICourse {
	_id?: Types.ObjectId | string;
	imageId?: string;
}
