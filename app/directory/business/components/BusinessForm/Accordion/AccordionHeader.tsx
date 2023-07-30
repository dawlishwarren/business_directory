import React from 'react';
import styles from './accordionForm.module.css';
import { HeaderProps } from '../../../../../../types/FormTypes';

const AccordionHeader = ({ id, ariaSection, title, onClick }: HeaderProps) => {
	return (
		<button
			type='button'
			aria-expanded='true'
			className={styles.accordion_trigger}
			id={id}
			aria-controls={ariaSection}
			onClick={onClick}>
			<h4>
				<span className={styles.accordion_title}>
					{title}
					<span className={styles.accordion_icon} />
				</span>
			</h4>
		</button>
	);
};

export default AccordionHeader;
