import './styles/globals.css';
import { Providers } from './providers';
import { inter, poppins } from './fonts';
import Header from './components/Header/Header';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			suppressHydrationWarning
			lang='en'
			className={`${inter.variable} ${poppins.variable}`}>
			<body>
				<Providers>
					<Header />
					{children}
					<footer>Footer</footer>
				</Providers>
			</body>
		</html>
	);
}
