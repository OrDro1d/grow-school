import { Types } from "mongoose";

export interface IUser {
	_id?: Types.ObjectId;
	name: string;
	email: string;
	password: string;
	age: number;
	gender?: string;
	role?: string;
	createdAt?: Date;
	courses?: Types.ObjectId[];
	wishList?: Types.ObjectId[];
}
