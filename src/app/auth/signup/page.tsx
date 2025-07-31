"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmationPassword, setConfirmationPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");

		try {
			if (!name || !email || !password || !confirmationPassword) {
				setError("Пожалуйста, заполните все поля");
				return;
			}

			if (password.length < 8) {
				setError("Длина пароля не должна быть меньше 8 символов");
				return;
			}

			if (password !== confirmationPassword) {
				setError("Введенные вами пароли не совпадают");
				return;
			}

			const result = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password, confirmationPassword })
			});

			const data = await result.json();

			if (!result.ok) {
				setError(data.error);
				throw new Error(data.error);
			}

			if (result.ok) router.replace("/auth/signin");
		} catch (error: any) {
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
			{error !== "" ? (
				<h1 className="text-red-500 text-center">{error}</h1>
			) : null}
			<button className="cursor-pointer">Зарегистрироваться</button>
			<div className="text-center text-xs">
				<span className="mr-1">Уже есть аккаунт?</span>
				<Link href="/auth/signin" className="text-skiey">
					Войти
				</Link>
			</div>
		</form>
	);
}
