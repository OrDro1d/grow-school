import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
	title: { type: String, required: true },
	moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
	createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
