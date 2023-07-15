import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import styles from './page.module.css';

export default async function Page({
	params: { id },
}: {
	params: { id: string };
}) {
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

	const { name, description, category } = business![0];
	return (
		<>
			<Breadcrumb
				items={[
					{ label: 'Directory', path: '/directory' },
					{ label: `${name}`, path: `/directory/business/${id}` },
				]}
			/>
			<main>
				<div className={`${styles.content_container} container`}>
					<div className={styles.business_name_container}>
						<h1>{name}</h1>
					</div>
					<div className={styles.business_details_container}>
						<p className='overline'>{category}</p>
						<p className='body_1'>{description}</p>
					</div>
				</div>
			</main>
		</>
	);
}
