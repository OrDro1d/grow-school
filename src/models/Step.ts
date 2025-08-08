import mongoose from "mongoose";

const StepSchema = new mongoose.Schema({
	title: { type: String, required: true },
	lesson: { type: mongoose.Schema.Types.ObjectId, required: true },
	content: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Step || mongoose.model("Step", StepSchema);
