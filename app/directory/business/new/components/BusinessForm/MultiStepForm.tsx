'use client';
import { ErrorMessage, Field, FormikBag } from 'formik';
import { FormValues, Category } from './FormTypes';
import * as Yup from 'yup';

import { Step } from './Stepper/Step';
import { StepWrapper } from './Stepper/StepWrapper';
import { ContactStep } from './Stepper/ContactStep';
import { AddressStep } from './Stepper/AddressStep';

import styles from './businessForm.module.css';
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const categoryOptions: Category[] = [
	{ id: 'shop', value: 'Shop' },
	{ id: 'service', value: 'Service' },
	{ id: 'restaurant', value: 'Restaurant' },
	{ id: 'other', value: 'Other' },
];
export const MultiStepForm = () => {
	const initialValues: FormValues = {
		name: '',
		description: '',
		category: 'Other',
		addresses: [
			{
				line_1: '',
				line_2: '',
				line_3: '',
				line_4: '',
				town: '',
				postcode: '',
			},
		],
		contacts: [
			{
				phone: '',
				email: '',
				website: '',
			},
		],
	};
	return (
		<>
			<h1 className={styles.form_title}>Signup</h1>
			<StepWrapper
				initialValues={initialValues}
				onSubmit={async (values: FormValues) =>
					sleep(300).then(() => console.log('Form submit', values))
				}>
				{/* Step 1: Basic Details */}
				<Step
					onSubmit={() => console.log('Step 1 Submitted')}
					validationSchema={Yup.object({
						name: Yup.string().required('Input Required!'),
						description: Yup.string().required('Description Required!'),
						category: Yup.mixed()
							.required('Please select a category')
							.oneOf(
								['Shop', 'Service', 'Restaurant', 'Other'],
								'Category required!'
							),
					})}>
					<h3 className={styles.step_title}>Basic Business Details</h3>
					<div className={styles.field_container}>
						<label htmlFor='name'>
							<h4>Business Name</h4>
						</label>
						<Field
							className={styles.field}
							component='input'
							id='name'
							name='name'
							placeholder='Business Name'
							type='text'
						/>
						<ErrorMessage
							className={`${styles.form_error} error`}
							component='div'
							name='name'
						/>
					</div>
					<div className={styles.field_container}>
						<label htmlFor='category'>
							<h4>Category</h4>
						</label>
						<div className={styles.options_container}>
							{categoryOptions.map((option) => (
								<div key={option.id}>
									<Field
										role='radio'
										type='radio'
										id={option.id}
										value={option.value}
										name='category'
										className={styles.option}
									/>
									<label htmlFor={option.id} className={styles.option_label}>
										{option.value}
									</label>
								</div>
							))}
						</div>

						<ErrorMessage
							className={`${styles.form_error} error`}
							component='div'
							name='category'
						/>
					</div>
					<div className={styles.field_container}>
						<label htmlFor='description'>
							<h4>Description</h4>
						</label>
						<Field
							className={`${styles.field} ${styles.textarea}`}
							component='textarea'
							id='description'
							name='description'
							placeholder='Some details about your business'
							type='text'
						/>
						<ErrorMessage
							className={`${styles.form_error} error`}
							component='div'
							name='description'
						/>
					</div>
				</Step>
				{/* End of Step 1: Basic Details */}
				{/* Step 2: Address Details */}
				<Step
					onSubmit={() => console.log('Step 2 submitted')}
					validationSchema={Yup.object().shape({
						addresses: Yup.array().of(
							Yup.object({
								line_1: Yup.string().required('Required'),
								line_2: Yup.string().notRequired(),
								line_3: Yup.string().notRequired(),
								line_4: Yup.string().notRequired(),
								town: Yup.string().required('Required'),
								postcode: Yup.string().required('Required'),
							})
						),
					})}>
					<h3 className={styles.step_title}>Business Address Information</h3>

					<AddressStep />
				</Step>
				{/* End of Step 2: Address Details */}
				{/* Step 3: Contact Details */}
				<Step
					onSubmit={() => console.log('Step 3 submitted')}
					validationSchema={Yup.object().shape({
						contacts: Yup.array().of(
							Yup.object({
								email: Yup.string()
									.email('Invalid email address')
									.required('Required'),
								phone: Yup.string().required('Required'),
								website: Yup.string().notRequired(),
							})
						),
					})}>
					<h3 className={styles.step_title}>Contact Information</h3>
					<ContactStep />
				</Step>
			</StepWrapper>
		</>
	);
};
