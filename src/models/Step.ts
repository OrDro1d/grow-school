import mongoose from "mongoose";

const StepSchema = new mongoose.Schema({
	number: { type: Number, required: true },
	title: { type: String, required: true },
	content: { type: String, requires: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Step || mongoose.model("Step", StepSchema);
