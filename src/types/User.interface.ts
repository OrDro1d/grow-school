import { Types } from 'mongoose'

export interface IUser {
  _id?: Types.ObjectId | string
  name: string
  email: string
  password: string
  age: number
  gender?: string
  role?: string
  createdAt?: Date
  wishList?: Types.ObjectId[] | string[]
}
