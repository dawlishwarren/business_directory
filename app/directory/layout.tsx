export default function DirectoryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<nav>Navbar!</nav>
			{children}
		</section>
	);
}
