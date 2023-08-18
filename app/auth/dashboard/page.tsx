// Packages/Dependencies
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// Components
import BusinessTable from './components/businessTable/BusinessTable';
// Styles
import styles from './page.module.css';

export default async function Page() {
	const supabase = createServerComponentClient<Database>({ cookies });
	// const {
	// 	data: { session },
	// } = await supabase.auth.getSession();
	// if (!session) {
	// 	redirect('/auth/unauthenticated');
	// }

	const { data: businessData, error } = await supabase
		.from('business')
		.select();
	if (error) console.error(error);
	return (
		<main>
			<div className='container'>
				<h1 className={`${styles.title} centered`}>Dashboard</h1>
				<section id='businessTable' className={styles.business_table_section}>
					<BusinessTable data={businessData} />
				</section>
				{/* <section id='admin' className={styles.admin_section}>
					<h6>Admin Details</h6>
					<p>User: {session.user.email}</p>
					{session.user.email !== undefined && (
						<p>TODO: Add Update User page and link to</p>
					)}
				</section> */}
			</div>
		</main>
	);
}
