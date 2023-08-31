'use client';

// Packages/Dependencies
import * as Yup from 'yup';
import { v4 } from 'uuid';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// Components
import { ErrorMessage, Field } from 'formik';
import { Step } from './Stepper/Step';
import { StepWrapper } from './Stepper/StepWrapper';
import { ContactStep } from './Stepper/ContactStep';
import { AddressStep } from './Stepper/AddressStep';
import LogoStep from './Stepper/LogoStep';
// Styles
import styles from './businessForm.module.css';
// Types
import {
	FormValues,
	Category,
	AddressValues,
	ContactValues,
} from '../../../../../types/FormTypes';
import { Database } from '@/types/supabase';
interface Addresses extends AddressValues {
	business_id?: string;
}
interface Contacts extends ContactValues {
	address_id: number;
	business_id?: string;
}
interface Props {
	isNewForm: boolean;
	formData: FormValues;
}

export const BusinessForm = ({ isNewForm, formData }: Props) => {
	// Forms rendered in /directory/business/new will have isNewForm and a blank formData
	// Forms rendered in /directory/business/[id]/edit will have !isNewForm and values passed as props to set as the Formik form's initialValues
	const initialValues = formData;
	const supabase = createClientComponentClient<Database>();
	const categoryOptions: Category[] = [
		{ id: 'shop', value: 'shop' },
		{ id: 'service', value: 'service' },
		{ id: 'restaurant', value: 'restaurant' },
		{ id: 'other', value: 'other' },
	];

	async function handleSubmit(values: FormValues) {
		// directory/business/new
		if (isNewForm) {
			const new_business_id = v4();
			const { name, description, category } = values;
			try {
				// Business Table Insert
				const { data, error } = await supabase
					.from('business')
					.insert({
						business_id: new_business_id,
						name: name,
						category: category,
						description: description,
					})
					.select();
				if (data) console.log('Response: ', data);
				if (error) throw error;

				// --- Address Table Insert --- //
				let addresses: Addresses[] = [];
				values.address.map((address, index) => {
					addresses.push({
						line_1: address.line_1,
						line_2: address.line_2,
						line_3: address.line_3,
						line_4: address.line_4,
						town: address.town,
						postcode: address.postcode,
						business_id: new_business_id,
					});
				});
				const { data: addressData, error: addressError } = await supabase
					.from('address')
					.insert(addresses)
					.select();
				console.log('Address Data: ', addressData);

				// Each contact should have an associated address.id (foreign key),
				const ids: number[] = [];
				addressData?.map((address) => ids.push(address.id));

				// --- Contact Table Insert --- //
				let contacts: Contacts[] = [];

				values.contact.map((contact, index) => {
					contacts.push({
						phone: contact.phone,
						email: contact.email,
						website: contact.website,
						address_id: ids[index],
						business_id: new_business_id,
					});
				});
				console.log(ids[0]);
				const { data: contactData, error: contactError } = await supabase
					.from('contact')
					.insert(contacts)
					.select();
				console.log('Contact Data:', contactData);

				alert('Business added!');
			} catch (error) {
				console.error(error);
			}
		} else if (!isNewForm) {
			// directory/business/[id]/edit
			const { business_id, name, description, category } = values;
			try {
				const { error: businessError } = await supabase
					.from('business')
					.update({
						name,
						category,
						description,
					})
					.eq('business_id', business_id);
				if (businessError) console.log(businessError);

				// Define array
				let addresses: AddressValues[] = [];
				values.address.map((address, index) => {
					addresses.push({
						line_1: address.line_1,
						line_2: address.line_2,
						line_3: address.line_3,
						line_4: address.line_4,
						town: address.town,
						postcode: address.postcode,
						business_id: business_id,
					});
				});
				const { error: addressError } = await supabase
					.from('address')
					.upsert(addresses)
					.eq('business_id', business_id);
				if (addressError) console.log(addressError);
				alert('Business Updated');
			} catch (error) {
				console.error(error);
			}
		}
	}
	return (
		<>
			<h1 className={styles.form_title}>
				{isNewForm ? 'New Business' : `Edit ${initialValues.name} Details`}
			</h1>
			<StepWrapper
				initialValues={initialValues}
				onSubmit={async (values: FormValues) => handleSubmit(values)}>
				{/* Step 1: Basic Details */}
				<Step
					onSubmit={() => console.log('Step 1 Submitted')}
					validationSchema={Yup.object({
						name: Yup.string().required('Input Required!'),
						description: Yup.string().required('Description Required!'),
						category: Yup.mixed()
							.required('Please select a category')
							.oneOf(
								['shop', 'service', 'restaurant', 'other'],
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
				{/* End of Step 3: Contact Details */}
				{/* Step 4: Business Logo */}
				<Step
					onSubmit={() => console.log('Step 4 submitted')}
					validationSchema={Yup.object().shape({
						logo: Yup.mixed().test(
							'is-valid-size',
							'Max allowed size is 100KB',
							(value) => value && value.size <= 200000
						),
					})}>
					<h3 className={styles.step_title}>Business Logo</h3>
					<LogoStep />
				</Step>
				{/* End of Step 4: Business Logo */}
			</StepWrapper>
		</>
	);
};
