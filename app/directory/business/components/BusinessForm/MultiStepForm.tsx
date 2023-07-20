"use client";
/////// Multi Step Form ///////
// Add / Edit Business Form with a Step Wizard breaking up the form into Steps for ease of use
// Using the 'one-step-per-thing', the form breaks up Business Details, Addresses, Contacts before submission

// TO-DO - ADD LOGO TO FORM, ADD EDIT PROPS

// 		Component imports	//
import { ErrorMessage, Field } from "formik";
import { Step } from "./Stepper/Step";
import { StepWrapper } from "./Stepper/StepWrapper";
import { ContactStep } from "./Stepper/ContactStep";
import { AddressStep } from "./Stepper/AddressStep";

// 			Helpers			//
import * as Yup from "yup";
import { v4 } from "uuid";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// 			Types			//
import {
	FormValues,
	Category,
	AddressValues,
	ContactValues,
} from "./FormTypes";
import { Database } from "@/types/supabase";
interface Addresses extends AddressValues {
	business_id?: string;
}
interface Contacts extends ContactValues {
	address_id: number;
	business_id?: string;
}

//			Styles			//
import styles from "./businessForm.module.css";

// 			Setup			//
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const supabase = createClientComponentClient<Database>();
const categoryOptions: Category[] = [
	{ id: "shop", value: "shop" },
	{ id: "service", value: "service" },
	{ id: "restaurant", value: "restaurant" },
	{ id: "other", value: "other" },
];

// Component
// isNewForm
interface Props {
	isNewForm: boolean;
	formData: FormValues;
}

export const MultiStepForm = ({ isNewForm, formData }: Props) => {
	// NEW - initialValues is an object with blank fields
	// EDIT - Values passed as a prop into the form, and mapped to initial values
	const initialValues = formData;
	console.log(initialValues);

	// Handle Submit
	async function handleSubmit(values: FormValues) {
		// NEW - creates a new id for the object, inputs data the tables
		if (isNewForm) {
			const new_business_id = v4();
			console.log(values);
			// Business Table Insert
			try {
				const { data, error } = await supabase
					.from("business")
					.insert({
						business_id: new_business_id,
						name: values.name,
						category: values.category,
						description: values.description,
					})
					.select();
				if (data) console.log("Response: ", data);
				if (error) throw error;

				// Address Table Insert

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
					.from("address")
					.insert(addresses)
					.select();
				console.log("Address Data: ", addressData);

				// Each contact should have an associated address.id,
				const ids: number[] = [];
				addressData?.map((address) => ids.push(address.id));

				// Contact Table Insert
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
					.from("contact")
					.insert(contacts)
					.select();
				console.log("Contact Data:", contactData);

				alert("Business added!");
			} catch (error) {
				console.error(error);
			}

			// EDIT - updates the data using the id
		} else if (!isNewForm) {
			const { business_id, name, description, category }: FormValues = values;
			try {
				const { error: businessError } = await supabase
					.from("business")
					.update({
						name,
						category,
						description,
					})
					.eq("business_id", business_id);
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
					.from("address")
					.upsert(addresses)
					.eq("business_id", business_id);
				if (addressError) console.log(addressError);
				alert("Business Updated");
			} catch (error) {
				console.error(error);
			}
		}
	}
	return (
		<>
			<h1 className={styles.form_title}>Signup</h1>
			<StepWrapper
				initialValues={initialValues}
				onSubmit={async (values: FormValues) =>
					sleep(300).then(() => handleSubmit(values))
				}>
				{/* Step 1: Basic Details */}
				<Step
					onSubmit={() => console.log("Step 1 Submitted")}
					validationSchema={Yup.object({
						name: Yup.string().required("Input Required!"),
						description: Yup.string().required("Description Required!"),
						category: Yup.mixed()
							.required("Please select a category")
							.oneOf(
								["shop", "service", "restaurant", "other"],
								"Category required!"
							),
					})}>
					<h3 className={styles.step_title}>Basic Business Details</h3>
					<div className={styles.field_container}>
						<label htmlFor="name">
							<h4>Business Name</h4>
						</label>
						<Field
							className={styles.field}
							component="input"
							id="name"
							name="name"
							placeholder="Business Name"
							type="text"
						/>
						<ErrorMessage
							className={`${styles.form_error} error`}
							component="div"
							name="name"
						/>
					</div>
					<div className={styles.field_container}>
						<label htmlFor="category">
							<h4>Category</h4>
						</label>
						<div className={styles.options_container}>
							{categoryOptions.map((option) => (
								<div key={option.id}>
									<Field
										role="radio"
										type="radio"
										id={option.id}
										value={option.value}
										name="category"
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
							component="div"
							name="category"
						/>
					</div>
					<div className={styles.field_container}>
						<label htmlFor="description">
							<h4>Description</h4>
						</label>
						<Field
							className={`${styles.field} ${styles.textarea}`}
							component="textarea"
							id="description"
							name="description"
							placeholder="Some details about your business"
							type="text"
						/>
						<ErrorMessage
							className={`${styles.form_error} error`}
							component="div"
							name="description"
						/>
					</div>
				</Step>
				{/* End of Step 1: Basic Details */}
				{/* Step 2: Address Details */}
				<Step
					onSubmit={() => console.log("Step 2 submitted")}
					validationSchema={Yup.object().shape({
						addresses: Yup.array().of(
							Yup.object({
								line_1: Yup.string().required("Required"),
								line_2: Yup.string().notRequired(),
								line_3: Yup.string().notRequired(),
								line_4: Yup.string().notRequired(),
								town: Yup.string().required("Required"),
								postcode: Yup.string().required("Required"),
							})
						),
					})}>
					<h3 className={styles.step_title}>Business Address Information</h3>

					<AddressStep />
				</Step>
				{/* End of Step 2: Address Details */}
				{/* Step 3: Contact Details */}
				<Step
					onSubmit={() => console.log("Step 3 submitted")}
					validationSchema={Yup.object().shape({
						contacts: Yup.array().of(
							Yup.object({
								email: Yup.string()
									.email("Invalid email address")
									.required("Required"),
								phone: Yup.string().required("Required"),
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
