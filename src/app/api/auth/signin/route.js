import dbConnect from "@/lib/dbConnect.js";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
	await dbConnect();

	const { email, password } = await request.json();

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ error: "Пользователь не найден" },
				{ status: 401 }
			);
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
		}

		const res = NextResponse.json(
			{ error: "Вход совершен успешно" },
			{ status: 200 }
		);

		res.cookies.set("userId", user._id, {
			httpOnly: true,
			secure: "secure",
			sameSite: "strict",
			path: "/",
			maxAge: 60 * 60 * 24
		});

		return res;
	} catch (error) {
		return NextResponse.json(
			{ error: "Внутренняя ошибка сервера" },
			{ status: 500 }
		);
	}
}
