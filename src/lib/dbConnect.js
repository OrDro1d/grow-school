import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function dbConnect() {
	await mongoose.connect(MONGODB_URI);
}
