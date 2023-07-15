import React from "react";
import styles from "./accordionForm.module.css";
import formStyles from "../businessForm.module.css";
import { Field, ErrorMessage } from "formik";
import { FieldProps } from "../FormTypes";

const AccordionField = ({
	id,
	type,
	label,
	placeholder,
	required,
	name,
	section,
}: FieldProps) => {
	return (
		<div className={styles.accordion_field}>
			<label htmlFor={id}>
				{label}
				{required && (
					<span aria-hidden="true" className={styles.required_asterisk}>
						*
					</span>
				)}
				:
			</label>
			<Field
				component="input"
				id={id}
				type={type}
				name={name}
				placeholder={placeholder}
				className={required ? styles.required : ""}
				aria-required={required ? "true" : "false"}
			/>
			<ErrorMessage
				name={`${name}`}
				component="div"
				className={`${formStyles.form_error} error`}
			/>
		</div>
	);
};

export default AccordionField;
