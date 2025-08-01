import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fontInter = Inter({
	subsets: ["latin", "cyrillic"]
});

export const metadata = {
	title: "Grow School",
	icons: {
		icon: "/favicon.ico"
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={fontInter.className}>{children}</body>
		</html>
	);
}
