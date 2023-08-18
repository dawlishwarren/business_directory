'use client';

// Packages/Dependencies
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Components
import LoginToggle from '@/app/auth/loginToggle';
import ThemeChanger from './ThemeChanger/ThemeChanger';
// Styles
import styles from './header.module.css';

export default async function Header({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link tabIndex={0} href='/'>
					<h5 className={pathname == '/' ? styles.disabled : styles.nav_link}>
						Home
					</h5>
				</Link>
				<Link href='/directory'>
					<h5
						className={
							pathname == '/directory' ? styles.disabled : styles.nav_link
						}>
						Directory
					</h5>
				</Link>
				{children}
			</nav>
			<div className={styles.theme_changer_container}>
				<ThemeChanger />
			</div>
		</header>
	);
}
