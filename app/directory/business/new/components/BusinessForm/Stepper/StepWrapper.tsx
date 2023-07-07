import React, { ReactNode, useState } from 'react';
import { FormValues } from '../FormTypes';
import { Form, Formik } from 'formik';
import styles from '../businessForm.module.css';
import buttonStyles from '../../../../../../styles/utilities/button.module.css';

interface StepWrapper {
	children: ReactNode;
	initialValues: FormValues;
	onSubmit: any;
}
export function StepWrapper({
	children,
	initialValues,
	onSubmit,
}: StepWrapper) {
	const [stepNumber, setStepNumber] = useState(0);
	const [snapShot, setSnapShot] = useState(initialValues);

	const steps = React.Children.toArray(children);
	const step = steps[stepNumber];
	const totalSteps = steps.length;
	const isLastStep = stepNumber === totalSteps - 1;

	function next(values: FormValues) {
		setSnapShot(values);
		setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
	}
	function previous(values: FormValues) {
		setSnapShot(values);
		setStepNumber(Math.max(stepNumber - 1, 0));
	}
	async function handleSubmit(values: FormValues, bag: any) {
		if (React.isValidElement<{ onSubmit: any }>(step)) {
			if (step.props.onSubmit) {
				await step.props.onSubmit(values, bag);
			}
			if (isLastStep) {
				return step.props.onSubmit(values, bag);
			} else {
				bag.setTouched({});
				next(values);
			}
		}
	}

	return (
		<Formik initialValues={snapShot} onSubmit={handleSubmit}>
			{({ values, isSubmitting }) => (
				<Form aria-label='Business details form' className={styles.form}>
					{/* Step */}
					{step}
					{/* Next/Prev/Submit Buttons */}
					<div className={styles.step_nav_container}>
						{/* Overline */}
						<p className='overline'>
							Step {stepNumber + 1} of {totalSteps}
						</p>
						<div className={styles.step_nav_buttons}>
							{stepNumber > 0 && (
								<button
									onClick={() => previous(values)}
									type='button'
									className={`${styles.step_nav_button} ${buttonStyles.button_large}`}>
									Back
								</button>
							)}
							<div>
								<button
									disabled={isSubmitting}
									type='submit'
									className={`${styles.step_nav_button} ${buttonStyles.button_large}`}>
									{isLastStep ? 'Submit' : 'Next'}
								</button>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}
