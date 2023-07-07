import React from "react";
import styles from "./accordionForm.module.css";
import { HeaderProps } from "../FormTypes";

const AccordionHeader = ({ id, ariaSection, title, onClick }: HeaderProps) => {
	return (
		<button
			type="button"
			aria-expanded="true"
			className={styles.accordion_trigger}
			id={id}
			aria-controls={ariaSection}
			onClick={onClick}>
			<span className={styles.accordion_title}>
				<h4>{title}</h4>
				<span className={styles.accordion_icon}></span>
			</span>
		</button>
	);
};

export default AccordionHeader;
