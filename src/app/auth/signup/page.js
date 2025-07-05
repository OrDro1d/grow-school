"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import bcrypt from "bcryptjs";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmationPassword, setConfirmationPassword] = useState("");

	const router = useRouter();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const result = await fetch("/api/auth/signup", {
				method: "POST",
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
		<form onSubmit={handleSubmit}>
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
			<button>Войти</button>
		</form>
	);
}
