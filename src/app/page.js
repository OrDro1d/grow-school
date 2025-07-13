import Image from "next/image";
import NavBar from "@/components/main/NavBar";
import MainBlock from "@/components/main/MainBlock";

export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<main className="flex justify-center">
				<MainBlock></MainBlock>
			</main>
		</>
	);
}
