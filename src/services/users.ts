'use server';
// Модели Mongoose
import User from '@/models/User';
import { dbConnect } from '@/services/db';
// Типы и интерфейсы
import type { id } from '@/types/id.type';
import type { IUser } from '@/types/User.interface';

/**
 * Возвращает данные о пользователе по переданному id. Возвращает данные о пользователе в случае успешного поиска, иначе - null.
 *
 * @param {id} id - id пользователя.
 * @returns {Promise<IUser | null>} - Данные о пользователе.
 */
export async function getUser(id: id): Promise<IUser | null> {
  await dbConnect();
  const user: IUser | null = await User.findById(id).lean<IUser>();
  return user;
}
