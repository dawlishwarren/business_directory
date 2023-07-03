"use client";
import { useState } from "react";
import styles from "../components/Accordion/accordionForm.module.css";
import { Formik, Form, FieldArray } from "formik";
import { FormValues, Category } from "./Accordion/AccordionTypes";
import { Step } from "./Step";

import AccordionSection from "./Accordion/AccordionSection";
import AccordionField from "./Accordion/AccordionField";
import AccordionRadio from "./Accordion/AccordionRadio";
import { StepWrapper } from "./Stepper/StepWrapper";

export const categoryOptions: Category[] = [
	{ id: "shop", value: "Shop" },
	{ id: "service", value: "Service" },
	{ id: "restaurant", value: "Restaurant" },
	{ id: "other", value: "Other" },
];
export const MultiStepForm = () => {
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
			<StepWrapper values={formState} onSubmit={() => console.log("Step")}>
				<Step onSubmit={() => console.log("Step 1")}>
					<p>Step 1</p>
				</Step>
				<Step onSubmit={() => console.log("Step 2")}>
					<FieldArray name="addresses">
						{({ remove, push }) => (
							<>
								<div id="accordionGroup" className={styles.accordion}>
									{formState.addresses.length > 0 &&
										formState.addresses.map((address, index) => (
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
														<button type="button" onClick={() => remove(index)}>
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
				</Step>
				<Step onSubmit={() => console.log("Step 3")}>
					<FieldArray name="contacts">
						{/* REMOVE AND PUSH UPDATE VALUES NOT STATE(INITIALVALUES) - LOOK INTO USEFORMIKCONTEXT() */}
						{({ remove, push }) => (
							<>
								<div id="accordionGroup" className={styles.accordion}>
									{formState.contacts.length > 0 &&
										formState.contacts.map((contact, index) => (
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
														<button type="button" onClick={() => remove(index)}>
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
				</Step>
			</StepWrapper>
		</div>
	);
};
