"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");

		try {
			if (!email || !password) {
				setError("Пожалуйста, заполните все поля");
				return;
			}

			const result = await fetch("/api/auth/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password })
			});

			const data = await result.json();

			if (!result.ok) {
				setError(data.error);
				throw new Error(data.error);
			}

			if (result.ok) {
				localStorage.setItem("userId", data.userId);
				router.replace("/");
			}
		} catch (error: any) {
			console.log(error.message);
		}
	}
	return (
		<form
			className="flex flex-col w-2xl my-[25vh] mx-auto p-4 border-2 border-neutral-600"
			onSubmit={handleSubmit}
		>
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
			{error !== "" ? (
				<h1 className="text-red-500 text-center">{error}</h1>
			) : null}
			<button className="cursor-pointer">Войти</button>
		</form>
	);
}
