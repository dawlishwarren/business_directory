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
			{' '}
			<section>
				<div className={styles.directory_container}>
					<h1 className={gradientStyles.title_text_rtl}>Purple Pages</h1>
					<Directory data={businesses} />
				</div>
			</section>
		</main>
	);
}
