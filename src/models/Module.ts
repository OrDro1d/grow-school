import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	number: { type: Number, required: true },
	lessons: { type: Array<mongoose.Types.ObjectId> },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Module || mongoose.model("Module", ModuleSchema);
