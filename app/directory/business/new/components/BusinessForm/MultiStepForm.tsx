'use client';
import { ErrorMessage, Field } from 'formik';
import { FormValues, Category } from './FormTypes';
import * as Yup from 'yup';

import { Step } from './Stepper/Step';
import { StepWrapper } from './Stepper/StepWrapper';
import { ContactStep } from './Stepper/ContactStep';
import { AddressStep } from './Stepper/AddressStep';

import styles from './businessForm.module.css';

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
				line_1: 'High Street',
				line_2: '',
				line_3: '',
				line_4: '',
				town: '',
				postcode: '',
			},
			{
				line_1: 'Higher Street',
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
				onSubmit={() => console.log('Step')}>
				<Step
					onSubmit={() => console.log('Step1 onsubmit')}
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
					<div>
						<label htmlFor='name'>Business Name</label>
						<Field
							component='input'
							id='name'
							name='name'
							placeholder='Business Name'
							type='text'
						/>
						<ErrorMessage className='error' component='div' name='name' />
					</div>
					<div>
						{categoryOptions.map((option) => (
							<div key={option.id}>
								<Field
									role='radio'
									type='radio'
									id={option.id}
									value={option.value}
									name='category'
								/>
								<label htmlFor={option.id}>{option.value}</label>
							</div>
						))}
						<ErrorMessage className='error' component='div' name='category' />
					</div>
					<div>
						<label htmlFor='description'>Description</label>
						<Field
							component='textarea'
							id='description'
							name='description'
							placeholder='Some details about your business'
							type='text'
						/>
						<ErrorMessage
							className='error'
							component='div'
							name='description'
						/>
					</div>
				</Step>
				{/* End of Basic Details */}
				{/* Step 2: Address Details */}
				<Step
					onSubmit={() => console.log('Step2 onSubmit')}
					validationSchema={Yup.object({
						line_1: Yup.string().required('Required'),
						line_2: Yup.string().notRequired(),
						line_3: Yup.string().notRequired(),
						line_4: Yup.string().notRequired(),
						town: Yup.string().required(),
						postcode: Yup.string().required(),
					})}>
					<ContactStep />
				</Step>
				<Step
					onSubmit={() => console.log('Step 3 onSubmit')}
					validationSchema={Yup.object({
						website: Yup.string().required('Required'),
						email: Yup.string()
							.email('Invalid email address')
							.required('Required'),
						phone: Yup.string().required('Required'),
					})}>
					<AddressStep />
				</Step>
			</StepWrapper>
		</>
	);
};
