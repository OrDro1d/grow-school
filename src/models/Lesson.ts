import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
	title: { type: String, required: true },
	number: { type: Number, required: true },
	steps: { type: Array<mongoose.Types.ObjectId> },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
