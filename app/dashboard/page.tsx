// Packages/Dependencies
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
// Components
import BusinessTable from './components/businessTable/BusinessTable';
import AdminTable from './components/adminTable/AdminTable';
// Styles
import styles from './page.module.css';

export default async function Page() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: businessData, error } = await supabase
		.from('business')
		.select();
	if (error) console.error(error);

	// Get all users on Auth Table
	// const {data, error} = await supabase.from()
	return (
		<main>
			<div className='container'>
				<h1 className={`${styles.title} centered`}>Dashboard</h1>
				<section id='businessTable' className={styles.business_table_section}>
					<BusinessTable data={businessData} />
				</section>
				<section id='userTable' className={styles.user_table_section}>
					<AdminTable />
				</section>
			</div>
		</main>
	);
}
