import { Types } from 'mongoose'
import { IModuleContentClient } from '@/types/Module.interface'
export interface ICourse {
  _id?: Types.ObjectId | string
  title: string
  imageURL: string
  author?: Types.ObjectId | string
  createdAt?: Date
  recommended?: boolean
  certificate?: boolean
  length?: number
  students?: number
  price?: number
  imageId?: string
  published?: boolean
}

export interface ICourseClient {
  _id?: string
  title: string
  imageURL: string
  author?: string
  createdAt?: string
  recommended?: boolean
  certificate?: boolean
  length?: number
  students?: number
  price?: number
  imageId?: string
  published?: boolean
}

export interface ICourseContentClient {
  _id: string
  title: string
  imageURL?: string
  author?: string
  recommended?: boolean
  certificate?: boolean
  length?: number
  students?: number
  price?: number
  imageId?: string
  published?: boolean
  modules: IModuleContentClient[]
  createdAt?: string
}
