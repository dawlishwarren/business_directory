import { useFormikContext, FieldArray, ErrorMessage } from "formik";
import { FormValues } from "../FormTypes";
import AccordionSection from "../Accordion/AccordionSection";
import AccordionField from "../Accordion/AccordionField";
import styles from "../Accordion/accordionForm.module.css";
import buttonStyles from "../../../../../../styles/utilities/button.module.css";

export function AddressStep() {
	const { values } = useFormikContext<FormValues>();
	if (values)
		return (
			<FieldArray name="address">
				{({ push, remove }) => (
					<>
						<div id="accordionGroup" className={styles.accordion}>
							{values.address &&
								values.address.map((address, index) => (
									<div key={index}>
										<AccordionSection
											ariaSection="addressSection"
											id={`addressSection${index + 1}`}
											title={`${address.line_1} Address Details`}>
											<div>
												<fieldset className={styles.fieldset}>
													<AccordionField
														id={`address[${index}].line_1`}
														name={`address[${index}].line_1`}
														type="text"
														label="Line 1"
														placeholder=""
														required
														index={index}
														section="address"
													/>
													<AccordionField
														id={`address[${index}].line_2`}
														name={`address[${index}].line_2`}
														type="text"
														label="Line 2"
														placeholder=""
														required={false}
														index={index}
														section="address"
													/>
													<AccordionField
														id={`address[${index}].line_3`}
														name={`address[${index}].line_3`}
														type="text"
														label="Line 3"
														placeholder=""
														required={false}
														index={index}
														section="address"
													/>
													<AccordionField
														id={`address[${index}].line_4`}
														name={`address[${index}].line_4`}
														type="text"
														label="Line 4"
														placeholder=""
														required={false}
														index={index}
														section="address"
													/>
													<AccordionField
														id={`address[${index}].town`}
														name={`address[${index}].town`}
														type="text"
														label="Town"
														placeholder=""
														required
														index={index}
														section="address"
													/>
													<AccordionField
														id={`address[${index}].postcode`}
														name={`address[${index}].postcode`}
														type="text"
														label="Postcode"
														placeholder=""
														required
														index={index}
														section="address"
													/>
												</fieldset>
												<button
													className={`${styles.accordion_remove_button} ${buttonStyles.button_medium}`}
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
							className={`${styles.accordion_add_button} ${buttonStyles.button_large}`}
							type="button"
							onClick={() =>
								push({
									line_1: "",
									line_2: "",
									line_3: "",
									line_4: "",
									town: "",
									postcode: "",
								})
							}>
							Add address details
						</button>
					</>
				)}
			</FieldArray>
		);
}
