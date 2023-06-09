'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
import ThemeChanger from './ThemeChanger';

export default function Header() {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href='/'>
					<h5 className={pathname == '/' ? styles.disabled : styles.nav_link}>
						Homepage
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
			</nav>
			<div className={styles.theme_changer}>
				<ThemeChanger />
			</div>
			<div className={styles.login}>
				<Link href='/login'>
					<h5
						className={
							pathname == '/login' ? styles.disabled : styles.nav_link
						}>
						Login
					</h5>
				</Link>
			</div>
		</header>
	);
}
