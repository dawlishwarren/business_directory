import { ReactElement } from 'react';
import { FormikHandlers } from 'formik';
export interface FormValues {
	name: string;
	description: string;
	category?: any;
	address: AddressValues[];
	contact: ContactValues[];
}
export interface FieldInputProps<Value> {
	value: Value;
	/** Name of the field */
	// name: string;
	/** Multiple select? */
	multiple?: boolean;
	/** Is the field checked? */
	checked?: boolean;
	/** Change event handler */
	onChange: FormikHandlers['handleChange'];
	/** Blur event handler */
	onBlur: FormikHandlers['handleBlur'];
}
export interface AddressValues {
	line_1: string;
	line_2?: string;
	line_3?: string;
	line_4?: string;
	town: string;
	postcode: string;
}
export interface ContactValues {
	phone: string;
	email: string;
	website: string;
}
export interface SectionProps {
	id: string;
	title: string;
	ariaSection: string;
	children: ReactElement;
}
export interface HeaderProps {
	id: string;
	ariaSection: string;
	title: string;
	onClick: any;
}
export interface PanelProps {
	id: string;
	ariaLabel: string;
	children: ReactElement;
	hidden: boolean;
}
export interface FieldProps {
	id: string;
	type: string;
	label: string;
	placeholder: string;
	value?: string;
	required: boolean;
	index?: number;
	section?: string;
	name: string;
}
export interface RadioProps {
	id: string;
	ariaLabel: string;
	name: string;
	options: Category[];
}
enum CategoryValues {
	'restaurant',
	'shop',
	'service',
	'other',
	null,
	undefined,
}
export interface Category {
	id: string;
	value: keyof typeof CategoryValues;
}
export interface ArrayProps {
	data: MockFormData[];
}
export interface MockFormData {
	type: string;
	title: string;
	id: string;
	ariaSection: string;
}
