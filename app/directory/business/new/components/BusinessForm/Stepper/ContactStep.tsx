import { FieldArray, useFormikContext } from 'formik';
import { FormValues } from '../FormTypes';
import styles from '../Accordion/accordionForm.module.css';
import AccordionSection from '../Accordion/AccordionSection';
import AccordionField from '../Accordion/AccordionField';

export function ContactStep() {
	const { values } = useFormikContext<FormValues>();
	if (values)
		return (
			<FieldArray name='contacts'>
				{({ remove, push }) => (
					<>
						<div id='accordionGroup' className={styles.accordion}>
							{values.contacts.length > 0 &&
								values.contacts.map((contact, index) => (
									<div key={index}>
										<AccordionSection
											ariaSection='contactSection'
											id={`contact${index}id`}
											title='Contact Details'>
											<div>
												<fieldset className={styles.fieldset}>
													<AccordionField
														id={`contacts.${index}.phone`}
														name={`contacts.${index}.phone`}
														type='text'
														label='Phone Number'
														placeholder=''
														required={false}
														index={index}
														section='contact'
													/>
													<AccordionField
														id={`contacts.${index}.email`}
														name={`contacts.${index}.email`}
														type='email'
														label='Email'
														placeholder=''
														index={index}
														required={false}
														section='contact'
													/>
													<AccordionField
														id={`contacts.${index}.website`}
														name={`contacts.${index}.website`}
														type='website'
														label='Website'
														placeholder=''
														index={index}
														required={false}
														section='contact'
													/>
												</fieldset>
												<button type='button' onClick={() => remove(index)}>
													Remove Contact
												</button>
											</div>
										</AccordionSection>
									</div>
								))}
						</div>
						<button
							type='button'
							onClick={() =>
								push({
									phone: '01395 000000',
									email: 'business@business.com',
									website: 'business.com',
								})
							}>
							Add contact details
						</button>
					</>
				)}
			</FieldArray>
		);
}
