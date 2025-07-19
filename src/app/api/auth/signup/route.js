import dbConnect from "@/lib/dbConnect.js";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(request) {
	await dbConnect();

	const { name, email, password } = await request.json();

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return new Response(
				JSON.stringify({ error: "Пользователь с таким email уже существует" }),
				{ headers: { "Content-Type": "application/json" }, status: 409 }
			);
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		return new Response(
			JSON.stringify({ message: "Регистрация прошла успешно" }),
			{ headers: { "Content-Type": "application/json" }, status: 201 }
		);
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ error: "Внутренняя ошибка сервера" }),
			{ headers: { "Content-Type": "application/json" }, status: 500 }
		);
	}
}
