'use client';
import { FormValues } from './components/BusinessForm/FormTypes';
import { MultiStepForm } from './components/BusinessForm/MultiStepForm';

export default function Page() {
	const formData: FormValues = {
		name: '',
		description: '',
		category: 'Other',
		address: [
			{
				line_1: '',
				line_2: '',
				line_3: '',
				line_4: '',
				town: '',
				postcode: '',
			},
		],
		contact: [
			{
				phone: '',
				email: '',
				website: '',
			},
		],
	};
	return (
		<main>
			<div className='container'>
				<MultiStepForm isNewForm={true} formData={formData} />
			</div>
		</main>
	);
}
