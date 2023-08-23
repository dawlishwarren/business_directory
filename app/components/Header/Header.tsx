"use client";

import { ReactNode, useEffect, useState } from "react";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import styles from "./header.module.css";
import Link from "next/link";
interface WindowType {
	width: number;
	height: number;
}
import { usePathname } from "next/navigation";
import navStyles from "@/app/styles/utilities/navItem.module.css";

export default function Header({ children }: { children: ReactNode }) {
	const size = useWindowSize();
	const pathname = usePathname();
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
			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}, []);
		return windowSize;
	}
	const [hamburgerActive, setHamburgerActive] = useState(false);
	const handleClick = () => {
		setHamburgerActive(!hamburgerActive);
	};
	return (
		<>
			{size.width >= 1024 ? (
				<header className={styles.header}>
					<nav role="navigation">
						<div>
							<Link tabIndex={0} href="/">
								<h5
									className={
										pathname == "/" ? navStyles.disabled : navStyles.nav_item
									}>
									Home
								</h5>
							</Link>
							<Link href="/directory">
								<h5
									className={
										pathname == "/directory"
											? navStyles.disabled
											: navStyles.nav_item
									}>
									Directory
								</h5>
							</Link>
						</div>
					</nav>
					<div className={styles.theme_changer_container}>
						<ThemeChanger />
					</div>
					<nav className={`${styles.nav} ${styles.align_right}`} id="authLinks">
						{children}
					</nav>
				</header>
			) : (
				<>
					<header className={styles.header}>
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
						{children}
					</header>
					<nav style={{ display: hamburgerActive ? "block" : "none" }}>
						<ul className={styles.navigation_links}>
							<li className={styles.navigation_link_wrapper}>
								<Link href="/">
									<h5>Home</h5>
								</Link>
							</li>
							<li className={styles.navigation_link_wrapper}>
								<Link href="/directory">
									<h5>Directory</h5>
								</Link>
							</li>
						</ul>
					</nav>
				</>
			)}
		</>
	);
}
