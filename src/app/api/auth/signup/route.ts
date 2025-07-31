import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	await dbConnect();

	const { name, email, password } = await request.json();

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ error: "Пользователь с таким email уже существует" },
				{ status: 409 }
			);
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		return NextResponse.json(
			{ message: "Регистрация прошла успешно" },
			{ status: 201 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		);
	}
}
