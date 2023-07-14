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
import { cookies } from 'next/headers';
import { MultiStepForm } from '../../new/components/BusinessForm/MultiStepForm';
import { FormValues } from '../../new/components/BusinessForm/FormTypes';

const supabase = createServerComponentClient<Database>({ cookies });
export default async function Page({ params: { id } }: Params) {
	const {
		data: business,
		error,
		status,
	} = await supabase
		.from('business')
		.select(`*, address (*), contact(*)`)
		.eq('business_id', id);

	if (error && status !== 406) {
		throw error;
	}
	if (business !== null) {
	}
	const businessData = business![0]

	}

	return (
		<main>
			<div className='container'>
				<MultiStepForm isNewForm={false} formData={business![0]} />
			</div>
		</main>
	);
}
