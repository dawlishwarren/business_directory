/////// Edit Page ///////
// Page takes the business id as params from the Dynamic Segment
// Uses id to query the database for a business with that id.
// Passes that as an object of formData into the MultiStepForm

// 			Types			//
import { Database } from '@/types/supabase';
interface Params {
	params: {
		id: string;
	};
}
// 			Helpers			//
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { MultiStepForm } from '../../components/BusinessForm/MultiStepForm';
import { FormValues } from '../../components/BusinessForm/FormTypes';
import { cookies } from 'next/headers';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

export default async function Page({ params: { id } }: Params) {
	const supabase = createServerComponentClient<Database>({ cookies });
	const {
		data: business,
		error,
		status,
	} = await supabase
		.from('business')
		.select(
			`*,
			address(
				line_1,
				line_2,
				line_3,
				line_4,
				town,
				postcode
			), contact (
				email,
				website,
				phone,
				address_id
			)
			`
		)
		.eq('business_id', id);

	if (error && status !== 406) {
		throw error;
	}
	const { name, category, description, address, contact } = business![0];
	const data: FormValues = {
		name: name,
		category: category,
		description: description,
		address: address,
		contact: contact,
		business_id: id,
	};

	return (
		<main>
			<Breadcrumb
				items={[
					{ label: 'Directory', path: '/directory' },
					{ label: `${name}`, path: `/directory/business/${id}` },
					{ label: 'Edit', path: `/directory/business/${id}/edit` },
				]}
			/>
			<div className='container'>
				<MultiStepForm isNewForm={false} formData={data} />
			</div>
		</main>
	);
}
