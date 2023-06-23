"use client";

import { MouseEvent } from "react";
import styles from "../../page.module.css";

export default function GradientRotation({
	children,
}: {
	children: React.ReactNode;
}) {
	function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
		const rect = (
			document.getElementById("phone") as HTMLImageElement
		).getBoundingClientRect();
		const x = (rect.left + rect.right) / 2;
		const y = (rect.top + rect.bottom) / 2;

		// Get angle between centre of window and mouse coordinates
		const radians = Math.atan2(y - e.clientY, x - e.clientX);
		e.currentTarget.style.setProperty("--gradient-rotation", `${radians}rad`);
	}

	return (
		<div className={styles.radial_background}>
			<div onMouseMove={(e) => handleMouseMove(e)}>{children}</div>
		</div>
	);
}
