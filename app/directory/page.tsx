import { Database } from '@/types/supabase';
import Directory from './components/Directory/Directory';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Page() {
	// Query DB server side before page load
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: businesses } = await supabase.from('business').select();
	if (!businesses) {
		return <p>No businesses found!</p>;
	}
	return (
		<main>
			{/* Client Component for State Manipulation */}
			<Directory data={businesses} />
		</main>
	);
}
