import mongoose from "mongoose";
import { dbConnect } from "@/services/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { IUser } from "@/types/User.interface";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	await dbConnect();

	const {
		name,
		email,
		password
	}: { name: string; email: string; password: string } = await request.json();

	try {
		const existingUser: mongoose.Document | null = await User.findOne({
			email
		});
		if (existingUser) {
			return NextResponse.json(
				{ error: "Пользователь с таким email уже существует" },
				{ status: 409 }
			);
		}

		const salt: string = await bcrypt.genSalt(10);
		const hashedPassword: string = await bcrypt.hash(password, salt);

		const user: mongoose.Document = new User({
			name,
			email,
			password: hashedPassword
		});
		await user.save();

		return NextResponse.json(
			{ message: "Регистрация прошла успешно" },
			{ status: 201 }
		);
	} catch (error: any) {
		console.error(error);
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		);
	}
}
