import mongoose from 'mongoose'

let cachedConnection: mongoose.Mongoose | null = null

/**
 * Соединяет приложение с базой данных.
 *
 * @returns {mongoose} - Кэшированное соединение с базой данных.
 */
export async function dbConnect(): Promise<mongoose.Mongoose> {
  if (cachedConnection) {
    return cachedConnection
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI не задана')
  }

  cachedConnection = await mongoose.connect(process.env.MONGODB_URI)
  return cachedConnection
}
