"use client";

import { ReactNode, useState } from "react";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header({ children }: { children: ReactNode }) {
	const [hamburgerActive, setHamburgerActive] = useState(false);
	const handleClick = () => {
		setHamburgerActive(!hamburgerActive);
	};
	return (
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
	);
}
