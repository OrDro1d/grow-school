import type { Types } from 'mongoose';
import type { ILessonContentClient } from '@/types/Lesson.interface';
export interface IModule {
  _id?: Types.ObjectId | string;
  title: string;
  courseId: Types.ObjectId | string;
  createdAt?: Date;
}

export interface IModuleClient {
  _id: string;
  title: string;
  courseId: string;
  createdAt?: string;
}

export interface IModuleContentClient {
  _id: string;
  title: string;
  courseId: string;
  lessons: ILessonContentClient[];
  createdAt?: string;
}
