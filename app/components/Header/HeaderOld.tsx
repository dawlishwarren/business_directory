// "use client";
// // @refresh reset
// // Packages/Dependencies
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ReactNode, useState } from "react";
// // Components
// import ThemeChanger from "./ThemeChanger/ThemeChanger";
// // Styles
// import styles from "./header.module.css";
// import navStyles from "@/app/styles/utilities/navItem.module.css";

// export default function Header({ children }: { children: ReactNode }) {
// 	const pathname = usePathname();
// 	const [hamburgerActive, setHamburgerActive] = useState(false);

// 	function handleClick() {
// 		setHamburgerActive(!hamburgerActive);
// 	}

// 	return (
// 		<header className={styles.header}>
// 			<nav role="navigation">
// 				<div className={styles.hamburger_container}>
// 					<button className={styles.hamburger_icon} onClick={handleClick}>
// 						<div className={styles.hamburger_lines} id="menuToggle">
// 							<span className={`${styles.line} ${styles.line_1}`}></span>
// 							<span className={`${styles.line} ${styles.line_2}`}></span>
// 							<span className={`${styles.line} ${styles.line_3}`}></span>
// 						</div>
// 						<h5 hidden>Menu</h5>
// 					</button>
// 				</div>
// 				<div
// 					className={`${styles.nav} ${styles.navigation_links}`}
// 					style={{ display: hamburgerActive ? "block" : "none" }}>
// 					<div>
// 						<Link tabIndex={0} href="/">
// 							<h5
// 								className={
// 									pathname == "/" ? navStyles.disabled : navStyles.nav_item
// 								}>
// 								Home
// 							</h5>
// 						</Link>
// 						<Link href="/directory">
// 							<h5
// 								className={
// 									pathname == "/directory"
// 										? navStyles.disabled
// 										: navStyles.nav_item
// 								}>
// 								Directory
// 							</h5>
// 						</Link>
// 					</div>
// 				</div>
// 			</nav>
// 			<div className={styles.theme_changer_container}>
// 				<ThemeChanger />
// 			</div>
// 			{/* Children here is the Login server component */}
// 			<nav className={`${styles.nav} ${styles.align_right}`} id="authLinks">
// 				{children}
// 			</nav>
// 		</header>
// 	);
// }
