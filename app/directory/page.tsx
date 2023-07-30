// Packages/Dependencies
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
// Components
import Directory from './components/Directory/Directory';

export default async function Page() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: businesses } = await supabase.from('business').select();
	if (!businesses) {
		return <p>No businesses found!</p>;
	}
	return (
		<main>
			<Directory data={businesses} />
		</main>
	);
}
