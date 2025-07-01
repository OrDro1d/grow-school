export default function Search({ children }) {
	return (
		<input
			className="px-4 py-2 bg-neutral-100 rounded-4xl"
			type="text"
			placeholder={children}
		></input>
	);
}
