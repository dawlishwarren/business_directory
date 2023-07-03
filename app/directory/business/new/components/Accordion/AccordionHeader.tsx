import React from "react";
import styles from "./accordionForm.module.css";
import { HeaderProps } from "./AccordionTypes";

const AccordionHeader = ({ id, ariaSection, title, onClick }: HeaderProps) => {
	return (
		<h3>
			<button
				type="button"
				aria-expanded="true"
				className={styles.accordion_trigger}
				id={id}
				aria-controls={ariaSection}
				onClick={onClick}>
				<span className={styles.accordion_title}>
					{title}
					<span className={styles.accordion_icon}></span>
				</span>
			</button>
		</h3>
	);
};

export default AccordionHeader;
