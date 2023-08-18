'use client';

// Packages/Dependencies
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
// Components
import ThemeChanger from './ThemeChanger/ThemeChanger';
// Styles
import styles from './header.module.css';
import navStyles from '@/app/styles/utilities/navItem.module.css';

export default async function Header({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link tabIndex={0} href='/'>
					<h5
						className={
							pathname == '/' ? navStyles.disabled : navStyles.nav_item
						}>
						Home
					</h5>
				</Link>
				<Link href='/directory'>
					<h5
						className={
							pathname == '/directory' ? navStyles.disabled : navStyles.nav_item
						}>
						Directory
					</h5>
				</Link>
			</nav>
			<div className={styles.theme_changer_container}>
				<ThemeChanger />
			</div>
			{/* Children here is the Login server component */}
			<nav className={`${styles.nav} ${styles.align_right}`}>{children}</nav>
		</header>
	);
}
