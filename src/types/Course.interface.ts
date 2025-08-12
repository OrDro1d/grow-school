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
	imageId?: string;
	published?: boolean;
	modules?: Types.ObjectId[];
}

export interface ICourseClient {
	_id?: string;
	title: string;
	imageURL: string;
	author?: string;
	createdAt?: string;
	updatedAt?: string;
	recommended?: boolean;
	certificate?: boolean;
	length?: number;
	students?: number;
	price?: number;
	imageId?: string;
	published?: boolean;
	modules?: string[];
}
