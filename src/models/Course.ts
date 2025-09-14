import mongoose from 'mongoose'

import { ICourse } from '@/types/Course.interface'

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  recommended: { type: Boolean, default: false },
  certificate: { type: Boolean, default: false },
  length: { type: Number, default: 0 },
  students: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  published: { type: Boolean, default: false },
})

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)
