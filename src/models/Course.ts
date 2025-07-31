import mongoose from "mongoose";

import { ICourse } from "@/types/Course.interface";

const CourseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	imageURL: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	recommended: { type: Boolean, default: false },
	withCertificate: { type: Boolean, default: false },
	students: { type: Number, default: 0 },
	price: { type: Number, default: 0 }
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
