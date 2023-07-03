import styles from "./accordionForm.module.css";
import { PanelProps } from "./AccordionTypes";

const AccordionPanel = ({ id, ariaLabel, children, hidden }: PanelProps) => {
	return (
		<div
			id={id}
			role="region"
			aria-labelledby={ariaLabel}
			hidden={hidden}
			className={`${styles.accordion_panel} ${styles.button}`}>
			{children}
		</div>
	);
};

export default AccordionPanel;
