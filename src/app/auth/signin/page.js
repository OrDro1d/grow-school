"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import bcrypt from "bcryptjs";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const result = await fetch("/api/auth/signin", {
				method: "POST",
				body: JSON.stringify({ email, password })
			});

			if (!result.ok) {
				throw new Error(data.error);
			}

			const data = await result.json();

			if (result.ok) router.push("/");
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<form onSubmit={handleSubmit}>
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
				placeholder="введите свой пароль"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required
			></input>
			<button>Войти</button>
		</form>
	);
}
