export default function Search({ children }) {
	return (
		<input
			className="px-3 py-2 text-xs sm:text-sm md:text-base bg-neutral-100 rounded-4xl focus:outline-skiey"
			type="text"
			placeholder={children}
		></input>
	);
}
