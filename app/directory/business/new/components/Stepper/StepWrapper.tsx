import React, { ReactNode, useState } from "react";
import { FormValues } from "../Accordion/AccordionTypes";
import {
	Form,
	Formik,
	FormikBag,
	FormikComputedProps,
	FormikProps,
} from "formik";

interface StepWrapper {
	children: ReactNode;
	values: FormValues;
	onSubmit: any;
}
export function StepWrapper({ children, values, onSubmit }: StepWrapper) {
	const [stepNumber, setStepNumber] = useState(0);
	const [snapShot, setSnapShot] = useState(values);

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

	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
	return (
		<Formik initialValues={values} onSubmit={handleSubmit}>
			{({ values, isSubmitting }) => (
				<Form aria-label="Business details form">
					<p>
						Step {stepNumber + 1} of {totalSteps}
						{step}
						<div style={{ display: "flex" }}>
							{stepNumber > 0 && (
								<button onClick={() => previous(values)} type="button">
									Back
								</button>
							)}
							<div>
								<button disabled={isSubmitting} type="submit">
									{isLastStep ? "Submit" : "Next"}
								</button>
							</div>
						</div>
					</p>
				</Form>
			)}
		</Formik>
	);
}
