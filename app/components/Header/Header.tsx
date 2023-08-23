'use client';
// Packages/Dependencies
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// Components
import ThemeChanger from './ThemeChanger/ThemeChanger';
import Link from 'next/link';
// Styles
import styles from './header.module.css';
import navStyles from '@/app/styles/utilities/navItem.module.css';
// Types
interface WindowType {
	width: number;
	height: number;
}

export default function Header({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const size = useWindowSize();

	const [hamburgerActive, setHamburgerActive] = useState(false);
	const handleClick = () => {
		setHamburgerActive(!hamburgerActive);
	};

	function useWindowSize() {
		const [windowSize, setWindowSize] = useState<WindowType>({
			width: 0,
			height: 0,
		});
		useEffect(() => {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
			window.addEventListener('resize', handleResize);
			handleResize();
			return () => window.removeEventListener('resize', handleResize);
		}, []);
		return windowSize;
	}

	return (
		<>
			{size.width >= 1024 ? (
				<header className={styles.full_screen_header}>
					<nav
						role='navigation'
						className={styles.navigation_links}
						id='navLinks'>
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
									pathname == '/directory'
										? navStyles.disabled
										: navStyles.nav_item
								}>
								Directory
							</h5>
						</Link>
					</nav>
					<div className={styles.theme_changer_container}>
						<ThemeChanger />
					</div>
					<nav
						className={`${styles.navigation_links} ${styles.align_right}`}
						id='authLinks'>
						{children}
					</nav>
				</header>
			) : (
				<>
					<header className={styles.mobile_header}>
						<div className={styles.icons_padding_container}>
							<div className={styles.hamburger_icon_container}>
								<button className={styles.hamburger_icon} onClick={handleClick}>
									<h5 hidden>Navigation Menu</h5>
									<span className={styles.hamburger_line}></span>
									<span className={styles.hamburger_line}></span>
									<span className={styles.hamburger_line}></span>
								</button>
							</div>
							<div className={styles.theme_changer_container}>
								<ThemeChanger />
							</div>
						</div>
						{children}
					</header>
					<nav className={styles.mobile_nav} role='navigation'>
						<div
							aria-hidden={hamburgerActive ? 'false' : 'true'}
							className={
								hamburgerActive
									? styles.mobile_nav_active
									: styles.mobile_nav_hidden
							}>
							<ul className={styles.navigation_links}>
								<Link href='/'>
									<li
										className={styles.navigation_link_wrapper}
										onClick={handleClick}>
										<h5>Home</h5>
									</li>
								</Link>
								<Link href='/directory'>
									<li
										className={styles.navigation_link_wrapper}
										onClick={handleClick}>
										<h5>Directory</h5>
									</li>
								</Link>
							</ul>
						</div>
					</nav>
				</>
			)}
		</>
	);
}
