// Packages/Dependencies
import { Providers } from "./providers";
import { inter, poppins } from "./fonts";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Styles
import "./styles/globals.css";

export const metadata = {
	title: "Purple Pages",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={`${inter.variable} ${poppins.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
