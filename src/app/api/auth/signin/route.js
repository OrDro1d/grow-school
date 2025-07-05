import dbConnect from "@/lib/dbConnect.js";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
	await dbConnect();

	const { email, password } = await request.json;

	try {
		if (!email || !password) {
			return new Response(
				JSON.stringify({ error: "Заполните email и пароль" }),
				{
					status: 400
				}
			);
		}

		const user = await User.findOne({ email });
		if (!user) {
			return new Response(JSON.stringify({ error: "Пользователь не найден" }), {
				status: 401
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return new Response(JSON.stringify({ error: "Неверный пароль" }), {
				status: 401
			});
		}

		return new Response(JSON.stringify({ message: "Вход совершен успешно" }), {
			status: 200
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Внутрення ошибка сервера" }), {
			status: 500
		});
	}
}
