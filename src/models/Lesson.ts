import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
	title: { type: String, required: true },
	module: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
	steps: { type: [mongoose.Schema.Types.ObjectId], ref: "Step" },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
