import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	title: { type: String, required: true },
	authors: { type: String, required: true, unique: true, lowercase: true },
	password: { type: String },
	age: { type: Number, min: 0, default: null },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
