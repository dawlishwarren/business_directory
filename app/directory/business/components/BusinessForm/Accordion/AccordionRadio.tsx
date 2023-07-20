import React from 'react';
import styles from './accordionForm.module.css';
import { Field } from 'formik';
import { RadioProps } from '../FormTypes';

const AccordionRadio = ({ id, ariaLabel, options, name }: RadioProps) => {
	return (
		<div
			className={styles.radio}
			role='radiogroup'
			aria-labelledby={ariaLabel}
			id={id}>
			<h5 id={ariaLabel}>Category</h5>
			{options.map((option) => (
				<div key={option.id} className={styles.radio_list}>
					<Field
						role='radio'
						type='radio'
						id={option.id}
						value={option.value}
						name='category'
						className={styles.radio_item}
					/>
					<label htmlFor={option.id} className={styles.radio_item}>
						{option.value}
					</label>
				</div>
			))}
		</div>
	);
};

export default AccordionRadio;
