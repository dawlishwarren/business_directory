import { FieldArray, useFormikContext } from "formik";
import { FormValues } from "../FormTypes";
import styles from "../Accordion/accordionForm.module.css";
import AccordionSection from "../Accordion/AccordionSection";
import AccordionField from "../Accordion/AccordionField";
import buttonStyles from "../../../../../../styles/utilities/button.module.css";

export function ContactStep() {
	const { values } = useFormikContext<FormValues>();
	if (values)
		return (
			<>
				<FieldArray name="contact">
					{({ remove, push }) => (
						<>
							<div id="accordionGroup" className={styles.accordion}>
								{values.contact.length > 0 &&
									values.contact.map((contact, index) => (
										<div key={index}>
											<AccordionSection
												ariaSection="contactSection"
												id={`contact${index}id`}
												title={`${
													values.address.length >= values.contact.length
														? values.address[index].line_1
														: ""
												}
											Contact Details`}>
												<div>
													<fieldset className={styles.fieldset}>
														<AccordionField
															id={`contact[${index}].phone`}
															name={`contact[${index}].phone`}
															type="text"
															label="Phone Number"
															placeholder=""
															required={false}
															index={index}
															section="contact"
														/>
														<AccordionField
															id={`contact[${index}].email`}
															name={`contact[${index}].email`}
															type="email"
															label="Email"
															placeholder=""
															index={index}
															required={false}
															section="contact"
														/>
														<AccordionField
															id={`contact[${index}].website`}
															name={`contact[${index}].website`}
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
														className={`${styles.accordion_remove_button} ${buttonStyles.button_medium}`}
														onClick={() => remove(index)}>
														Remove Contact
													</button>
												</div>
											</AccordionSection>
										</div>
									))}
							</div>

							<button
								className={`${styles.accordion_add_button} ${buttonStyles.button_large}`}
								type="button"
								disabled={
									values.address.length > values.contact.length ? false : true
								}
								onClick={() =>
									push({
										phone: "",
										email: "",
										website: "",
									})
								}>
								Add contact details
							</button>
						</>
					)}
				</FieldArray>
				<p className={`body_1 ${styles.contact_paragraph}`}>
					If you have added more than one address in the previous step, press
					Add contact details to automatically add matching contact details for
					the address.
				</p>
			</>
		);
}
