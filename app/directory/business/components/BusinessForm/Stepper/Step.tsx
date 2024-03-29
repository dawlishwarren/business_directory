// Packages/Dependencies
import { ReactNode } from 'react';
import * as Yup from 'yup';
// Types
interface Step {
	children: ReactNode;
	onSubmit: () => void;
	validationSchema?: Yup.ObjectSchema;
}

export const Step = ({ children }: Step) => children;
