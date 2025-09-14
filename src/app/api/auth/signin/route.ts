import { dbConnect } from '@/services/db'
import User from '@/models/User'
import { IUser } from '@/types/User.interface'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  await dbConnect()

  const { email, password }: { email: string; password: string } = await request.json()

  try {
    const user: IUser | null = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: 'Пользователь не найден' }, { status: 401 })
    }

    const isMatch: boolean = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: 'Неверный пароль' }, { status: 401 })
    }

    const res = NextResponse.json({ message: 'Вход совершен успешно' }, { status: 200 })

    res.cookies.set('userId', user._id!.toString(), {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24,
    })

    return res
  } catch (error: any) {
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 })
  }
}
