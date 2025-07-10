"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import bcrypt from "bcryptjs";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmationPassword, setConfirmationPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	async function handleSubmit(event) {
		event.preventDefault();
		error = setError("");

		try {
			if (!name || !email || !password || !confirmationPassword) {
				error = setError("Пожалуйста, заполните все поля");
				return;
			}

			if (password.length < 8) {
				error = setError("Длина пароля не должна быть меньше 8 символов");
				return;
			}

			if (password !== confirmationPassword) {
				error = setError("Введенные вами пароли не совпадают");
				return;
			}

			const result = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password, confirmationPassword })
			});

			const data = await result.json();

			if (!result.ok) {
				throw new Error(data.error);
			}

			if (result.ok) router.push("/auth/signin");
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<form
			className="flex flex-col w-2xl my-[25vh] mx-auto p-4 border-2 border-neutral-600"
			onSubmit={handleSubmit}
		>
			<label htmlFor="name">Имя</label>
			<input
				id="name"
				type="text"
				placeholder="введите как к вам обращаться"
				onChange={(e) => setName(e.target.value)}
				value={name}
				required
			></input>
			<label htmlFor="email">Эл. почта</label>
			<input
				id="email"
				type="email"
				placeholder="введите свою эл. почту"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			></input>
			<label htmlFor="password">Пароль</label>
			<input
				id="password"
				type="password"
				placeholder="придумайте и введите пароль"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required
			></input>
			<label htmlFor="confirmationPassword">Повторите пароль</label>
			<input
				id="confirmationPassword"
				type="password"
				placeholder="повторите свой пароль"
				onChange={(e) => setConfirmationPassword(e.target.value)}
				value={confirmationPassword}
				required
			></input>
			<button className="cursor-pointer">Зарегистрироваться</button>
		</form>
	);
}
