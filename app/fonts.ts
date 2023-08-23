import { Poppins, Inter } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	preload: true,
});
export const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-poppins",
	subsets: ["latin"],
	preload: true,
});
