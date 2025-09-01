"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveAndReturnCourse } from "@/services/courses";
import { CldUploadWidget } from "next-cloudinary";

export default function CourseDataForm() {
	const [imageURL, setImageURL] = useState("");
	const [imageId, setImageId] = useState("");
	const [title, setTitle] = useState("");
	const [certificate, setCertificate] = useState(false);
	const [length, setLength] = useState(0);
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	async function createCourse() {
		setError("");

		try {
			if (!imageURL) {
				setError("Добавьте файл-обложку для курса");
				return;
			}
			// Сохраняем курс
			try {
				const newCourse = await saveAndReturnCourse(
					{
						title,
						price,
						imageURL,
						imageId,
						certificate,
						length
					},
					{ blankContent: true }
				);
				// Получаем id полученного курса и переносим пользователя на страницу дальнейшего редактирования курса
				router.replace(`/course/new/${newCourse._id}`);
			} catch (error: any) {
				console.log(error.message);
			}
		} catch (error: any) {
			setError(error.message);
			console.log(error.message);
		}
	}
	return (
		<form
			className="flex flex-col p-4 mx-auto my-4 border-2 w-fit border-gray-black"
			onSubmit={createCourse}
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
							onClick={() => open()}
							className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
						>
							Загрузить обложку курса
						</button>
					)}
				</CldUploadWidget>
			</div>
			<div className="*:m-2">
				<label htmlFor="course-name">Имя курса</label>
				<input
					className="p-2 border-2 border-gray-300 rounded-2xl"
					type="text"
					id="course-name"
					maxLength={80}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				></input>
			</div>
			<div className="*:m-2">
				<label htmlFor="course-length">Продолжительность курса</label>
				<input
					className="p-2 border-2 border-gray-300 rounded-2xl"
					type="number"
					id="course-length"
					value={length}
					max={999}
					onChange={(e) => setLength(Number(e.target.value))}
					required
				></input>
			</div>
			<div className="*:m-2">
				<label htmlFor="course-certificate">С сертификатом</label>
				<input
					className="p-2 border-2 border-gray-300 rounded-2xl"
					type="checkbox"
					id="course-certificate"
					checked={certificate}
					onChange={(e) => setCertificate(e.target.checked)}
				></input>
			</div>
			<div className="*:m-2">
				<label htmlFor="course-price">Стоимость курса</label>
				<input
					className="p-2 border-2 border-gray-300 rounded-2xl"
					type="number"
					id="course-price"
					value={price}
					max={99999}
					onChange={(e) => setPrice(Number(e.target.value))}
					required
				></input>
			</div>
			<div className="*:m-2">
				<label htmlFor="course-description">Описание курса</label>
				<textarea
					className="p-2 border-2 border-gray-300 rounded-2xl"
					id="course-description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Добавьте описание для своего курса"
				></textarea>
			</div>
			{error ? <p className="text-red-500">{error}</p> : null}
			<button
				className="block px-8 py-4 mx-auto mt-8 border-2 border-skiey rounded-4xl w-fit"
				type="submit"
			>
				Опубликовать
			</button>
		</form>
	);
}
