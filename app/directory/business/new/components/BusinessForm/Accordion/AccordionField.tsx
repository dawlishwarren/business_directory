import React from 'react';
import styles from './accordionForm.module.css';
import { Field, ErrorMessage } from 'formik';
import { FieldProps } from '../FormTypes';

const AccordionField = ({
	id,
	type,
	label,
	placeholder,
	required,
	index,
	section,
}: FieldProps) => {
	return (
		<div className={styles.accordion_field}>
			<label htmlFor={id}>
				{label}
				{required && (
					<span aria-hidden='true' className={styles.required_asterisk}>
						*
					</span>
				)}
				:
			</label>
			<Field
				id={id}
				type={type}
				name={id}
				placeholder={placeholder}
				className={required ? styles.required : ''}
				aria-required={required ? 'true' : 'false'}
			/>
			<ErrorMessage name={`${section}.${index}.line_1`} component='div' />
		</div>
	);
};

export default AccordionField;
