// Components
import { BusinessForm } from '../components/BusinessForm/BusinessForm';
// Types
import { FormValues } from '../../../../types/FormTypes';

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
				<BusinessForm isNewForm={true} formData={formData} />
			</div>
		</main>
	);
}
