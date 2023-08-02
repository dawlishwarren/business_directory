import BusinessTable from './components/BusinessTable';
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Page() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: businesses } = await supabase
		.from('business')
		.select('business_id, name');
	return (
		<div className='container'>
			<h1>Dashboard</h1>
			<BusinessTable businesses={businesses} />
		</div>
	);
}
