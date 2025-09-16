import mongoose from 'mongoose';

const ModuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Module || mongoose.model('Module', ModuleSchema);
