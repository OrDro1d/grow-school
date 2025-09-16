import type { Types } from 'mongoose';

export interface IStep {
  _id?: Types.ObjectId | string;
  lessonId: Types.ObjectId | string;
  content: string;
  createdAt?: Date;
}

export interface IStepClient {
  _id: string;
  lessonId: string;
  content?: string;
  createdAt?: string;
}
