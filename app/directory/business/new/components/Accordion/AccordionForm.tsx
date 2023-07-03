"use client";
import { useState } from "react";
import styles from "./accordionForm.module.css";
import { Formik, Form, FieldArray } from "formik";
import { FormValues, Category } from "./AccordionTypes";

import AccordionSection from "./AccordionSection";
import AccordionField from "./AccordionField";
import AccordionRadio from "./AccordionRadio";

export const categoryOptions: Category[] = [
	{ id: "shop", value: "Shop" },
	{ id: "service", value: "Service" },
	{ id: "restaurant", value: "Restaurant" },
	{ id: "other", value: "Other" },
];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const AccordionForm = () => {
	const [formState, setFormState] = useState<FormValues>({
		businessName: "My Business",
		businessDescription: "",
		category: "",
		addresses: [
			{
				line_1: "",
				line_2: "",
				line_3: "",
				line_4: "",
				town: "Budleigh",
				postcode: "EX0 000",
			},
			{
				line_1: "",
				line_2: "",
				line_3: "",
				line_4: "",
				town: "Budleigh",
				postcode: "EX0 001",
			},
		],
		contacts: [
			{
				phone: "01395 000000",
				email: "business@business.com",
				website: "business.com",
			},
		],
	});
	return (
		<div>
			<h1>Signup</h1>
			<Formik
				initialValues={formState}
				onSubmit={async (values: FormValues) => {
					await sleep(500);
					alert(JSON.stringify(values, null, 2));
				}}>
				{({ values }) => (
					<Form aria-label="Business details form">
						<div id="accordionGroup" className={styles.accordion}>
							<AccordionSection
								id="accordion1id"
								title="Business Details"
								ariaSection="businessSection">
								{/* Business Details */}
								<div>
									<fieldset className={styles.fieldset}>
										<AccordionField
											id="businessName"
											name="businessName"
											type="text"
											label="Name"
											placeholder="Alex"
											required
										/>
										<AccordionField
											id="businessDescription"
											name="businessDescription"
											type="text"
											label="Description"
											placeholder="Business Description"
											required={false}
										/>
										{/* CATEGORY */}
										<AccordionRadio
											id="businessCategory"
											name="businessCategory"
											ariaLabel="business_category"
											options={categoryOptions}
										/>
									</fieldset>
								</div>
							</AccordionSection>
						</div>
						<FieldArray name="addresses">
							{({ remove, push }) => (
								<>
									<div id="accordionGroup" className={styles.accordion}>
										{values.addresses.length > 0 &&
											values.addresses.map((address, index) => (
												<div key={index}>
													<AccordionSection
														ariaSection="addressSection"
														id={`addressSection${index + 1}`}
														title="Address Details">
														<div>
															<fieldset className={styles.fieldset}>
																<AccordionField
																	id={`addresses.${index}.line_1`}
																	name={`addresses.${index}.line_1`}
																	type="text"
																	label="Line 1"
																	placeholder=""
																	required
																	index={index}
																	section="address"
																/>
																<AccordionField
																	id={`addresses.${index}.line_2`}
																	name={`addresses.${index}.line_2`}
																	type="text"
																	label="Line 2"
																	placeholder=""
																	required={false}
																	index={index}
																	section="address"
																/>
																<AccordionField
																	id={`addresses.${index}.line_3`}
																	name={`addresses.${index}.line_3`}
																	type="text"
																	label="Line 3"
																	placeholder=""
																	required={false}
																	index={index}
																	section="address"
																/>
																<AccordionField
																	id={`addresses.${index}.line_4`}
																	name={`addresses.${index}.line_4`}
																	type="text"
																	label="Line 4"
																	placeholder=""
																	required={false}
																	index={index}
																	section="address"
																/>
																<AccordionField
																	id={`addresses.${index}.town`}
																	name={`addresses.${index}.town`}
																	type="text"
																	label="Town"
																	placeholder=""
																	required
																	index={index}
																	section="address"
																/>
																<AccordionField
																	id={`addresses.${index}.postcode`}
																	name={`addresses.${index}.postcode`}
																	type="text"
																	label="Postcode"
																	placeholder=""
																	required
																	index={index}
																	section="address"
																/>
															</fieldset>
															<button
																type="button"
																onClick={() => remove(index)}>
																Remove Address
															</button>
														</div>
													</AccordionSection>
												</div>
											))}
									</div>
									<button
										type="button"
										onClick={() =>
											push({
												line_1: "",
												line_2: "",
												line_3: "",
												line_4: "",
												town: "Budleigh",
												postcode: "EX0 000",
											})
										}>
										Add address details
									</button>
								</>
							)}
						</FieldArray>
						<FieldArray name="contacts">
							{({ remove, push }) => (
								<>
									<div id="accordionGroup" className={styles.accordion}>
										{values.contacts.length > 0 &&
											values.contacts.map((contact, index) => (
												<div key={index}>
													<AccordionSection
														ariaSection="contactSection"
														id={`contact${index}id`}
														title="Contact Details">
														<div>
															<fieldset className={styles.fieldset}>
																<AccordionField
																	id={`contacts.${index}.phone`}
																	name={`contacts.${index}.phone`}
																	type="text"
																	label="Phone Number"
																	placeholder=""
																	required={false}
																	index={index}
																	section="contact"
																/>
																<AccordionField
																	id={`contacts.${index}.email`}
																	name={`contacts.${index}.email`}
																	type="email"
																	label="Email"
																	placeholder=""
																	index={index}
																	required={false}
																	section="contact"
																/>
																<AccordionField
																	id={`contacts.${index}.website`}
																	name={`contacts.${index}.website`}
																	type="website"
																	label="Website"
																	placeholder=""
																	index={index}
																	required={false}
																	section="contact"
																/>
															</fieldset>
															<button
																type="button"
																onClick={() => remove(index)}>
																Remove Contact
															</button>
														</div>
													</AccordionSection>
												</div>
											))}
									</div>
									<button
										type="button"
										onClick={() =>
											push({
												phone: "01395 000000",
												email: "business@business.com",
												website: "business.com",
											})
										}>
										Add contact details
									</button>
								</>
							)}
						</FieldArray>
						<br />
						<button type="submit" className={styles.button}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
