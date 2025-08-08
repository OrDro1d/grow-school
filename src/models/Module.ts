import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
	lessons: { type: [mongoose.Schema.Types.ObjectId], ref: "Lesson" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Module || mongoose.model("Module", ModuleSchema);
