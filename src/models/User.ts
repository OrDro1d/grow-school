import mongoose from "mongoose";

import { IUser } from "@/types/User.interface";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true, lowercase: true },
	password: { type: String },
	age: { type: Number, min: 0, default: null },
	role: {
		type: String,
		enum: ["student", "author"],
		default: "student"
	},
	createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
