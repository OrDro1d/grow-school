import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	imageURL: { type: String, required: true },
	author: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
