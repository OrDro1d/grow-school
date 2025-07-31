"use client";

import { CldUploadWidget } from "next-cloudinary";
import { saveCourse } from "@/lib/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
	const [imageURL, setImageURL] = useState("");
	const [imageId, setImageId] = useState("");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [error, setError] = useState("");
	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError("");

		try {
			if (!imageURL) {
				setError("Добавьте файл-обложку для курса");
				return;
			}

			await saveCourse({ title, price, imageURL, imageId });
			router.replace("/");
		} catch (error: any) {
			setError(error.message);
			console.log(error.message);
		}
	}
	return (
		<main>
			<form
				className="flex flex-col w-fit border-2 border-gray-black mx-auto my-4 p-4"
				onSubmit={handleSubmit}
			>
				<div>
					<CldUploadWidget
						uploadPreset="course-covers"
						options={{
							sources: ["local", "url"],
							multiple: false,
							maxFileSize: 2_000_000
						}}
						onSuccess={(result: any) => {
							setImageURL(result.info.secure_url);
							setImageId(result.info.public_id);
						}}
					>
						{({ open }) => (
							<button
								type="button"
								onClick={() => open()}
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								Загрузить обложку курса
							</button>
						)}
					</CldUploadWidget>
				</div>
				<div className="*:m-2">
					<label htmlFor="course-name">Имя курса</label>
					<input
						className="border-2 border-gray-300 p-2 rounded-2xl"
						type="text"
						id="course-name"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					></input>
				</div>
				<div className="*:m-2">
					<label htmlFor="course-price">Стоимость курса</label>
					<input
						className="border-2 border-gray-300 p-2 rounded-2xl"
						type="number"
						id="course-price"
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
						required
					></input>
				</div>
				{!!error ? <p className="text-red-500">{error}</p> : null}
				<button
					className="border-skiey border-2 rounded-4xl px-8 py-4 mx-auto mt-8 block w-fit"
					type="submit"
				>
					Опубликовать
				</button>
			</form>
		</main>
	);
}
