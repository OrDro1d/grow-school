import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
	subsets: ["latin", "cyrillic"]
});

export const metadata = {
	title: "Grow School"
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={fontInter.variable}>{children}</body>
		</html>
	);
}
