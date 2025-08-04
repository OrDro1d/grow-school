import mongoose from "mongoose";

export interface ICourse {
	title: string;
	imageURL: string;
	author?: mongoose.Types.ObjectId | string;
	createdAt?: Date;
	updatedAt?: Date;
	recommended?: boolean;
	certificate?: boolean;
	length?: number;
	students?: number;
	price?: number;
	published?: boolean;
}

export interface ICourseData extends ICourse {
	_id?: mongoose.Types.ObjectId | string;
	imageId?: string;
}
