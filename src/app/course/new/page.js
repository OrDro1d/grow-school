export default function NewCoursePage() {
	return (
		<main>
			<form className="flex flex-col w-fit border-2 border-gray-300 mx-auto my-4">
				<div className="*:m-2">
					<label htmlFor="course-image">Обложка курса</label>
					<input type="file" id="course-image" required></input>
				</div>
				<div className="*:m-2">
					<label htmlFor="course-name">Имя курса</label>
					<input type="text" id="course-name" required></input>
				</div>
				<button>Опубликовать</button>
			</form>
		</main>
	);
}
