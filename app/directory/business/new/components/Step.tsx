import { FormikHelpers, FormikProps } from "formik";
import { FormValues } from "./Accordion/AccordionTypes";
import { ReactNode } from "react";
import * as Yup from "yup";

interface Step {
	children: ReactNode;
	onSubmit: () => void;
	validationSchema?: Yup.ObjectSchema;
}

export const Step = ({ children }: Step) => children;
