import Image from "next/image";
import themeChange from "../../../../public/dark-theme-svgrepo-com.svg";
import styles from "../header.module.css";
import buttonStyles from "../../../styles/utilities/button.module.css";
import { useRef } from "react";
import { useTheme } from "next-themes";

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
			<dialog ref={dialogRef}>
				<div className={styles.dialog_content}>
					<div className={styles.options}>
						<h4>
							<button
								className={`${buttonStyles.button_large} button`}
								value="system"
								onClick={handleClick}
								onMouseDown={handleClick}>
								System
							</button>
						</h4>
						<h4>
							<button
								className={`${buttonStyles.button_large} button`}
								value="light"
								onClick={handleClick}
								onMouseDown={handleClick}>
								Light
							</button>
						</h4>
						<h4>
							<button
								className={`${buttonStyles.button_large} button`}
								value="dark"
								onClick={handleClick}
								onMouseDown={handleClick}>
								Dark
							</button>
						</h4>
					</div>
					<button className="button" onClick={closeModal}>
						Close
					</button>
				</div>
			</dialog>
		</>
	);
}
