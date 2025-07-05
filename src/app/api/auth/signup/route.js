import dbConnect from "@/lib/dbConnect.js";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(request) {
	await dbConnect();

	const { name, email, password, confirmationPassword } = await request.json();

	try {
		if (!name || !email || !password || !confirmationPassword) {
			return new Response(
				JSON.stringify({ error: "Пожалуйста, заполните все поля" }),
				{ status: 400 }
			);
		}

		if (password.length < 6) {
			return new Response(
				JSON.stringify({ error: "Пароль должен содержать минимум 6 символов" }),
				{ status: 400 }
			);
		}

		if (password !== confirmationPassword) {
			return new Response(
				JSON.stringify({ error: "Введенные пароли не совпадают" }),
				{ status: 400 }
			);
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return new Response(
				JSON.stringify({ error: "Пользователь с таким email уже существует" }),
				{ status: 409 }
			);
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		return new Response(
			JSON.stringify({ message: "Регистрация прошла успешно" }),
			{
				status: 201
			}
		);
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ error: "Внутренняя ошибка сервера" }),
			{ status: 500 }
		);
	}
}
