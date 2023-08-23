"use client";
import Image from "next/image";
import themeChange from "../../../../public/dark-theme-svgrepo-com.svg";
import styles from "../header.module.css";
import buttonStyles from "../../../styles/utilities/button.module.css";
import { useRef } from "react";
import { useTheme } from "next-themes";
import dialogStyles from "@/app/styles/utilities/dialog.module.css";

export default function ThemeChanger() {
	const dialogRef = useRef<any>(null);
	const { theme, setTheme } = useTheme();
	function openModal() {
		dialogRef.current.showModal();
	}
	function closeModal() {
		dialogRef.current.close();
	}
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		console.log(e);
		setTheme((e.target as HTMLButtonElement).value);
	}
	return (
		<>
			<button className={styles.theme_changer} onClick={openModal}>
				<Image
					src={themeChange}
					width={50}
					style={{ objectFit: "contain" }}
					alt="Light/Dark Mode Theme Change"
				/>
			</button>
			<dialog className={dialogStyles.dialog} ref={dialogRef}>
				<div className={dialogStyles.dialog_content}>
					<div className={dialogStyles.options}>
						<button
							className={`${buttonStyles.button_large}`}
							value="system"
							onClick={handleClick}
							onMouseDown={handleClick}>
							System
						</button>
						<button
							className={`${buttonStyles.button_large}`}
							value="light"
							onClick={handleClick}
							onMouseDown={handleClick}>
							Light
						</button>
						<button
							className={`${buttonStyles.button_large}`}
							value="dark"
							onClick={handleClick}
							onMouseDown={handleClick}>
							Dark
						</button>
					</div>
					<div className={dialogStyles.close_button_wrapper}>
						<button
							className={`${buttonStyles.button_medium} ${dialogStyles.close_button}`}
							onClick={closeModal}>
							Close
						</button>
					</div>
				</div>
			</dialog>
		</>
	);
}
