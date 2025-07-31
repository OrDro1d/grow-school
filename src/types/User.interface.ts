import mongoose from "mongoose";

export interface IUser {
	_id?: mongoose.Types.ObjectId | string;
	name: string;
	email: string;
	password: string;
	age: number;
	role: string;
	createdAt: Date;
}
