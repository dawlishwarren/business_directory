import Card from './components/Card/Card';
import SkeletonCard from './components/Card/SkeletonCard';
import styles from './page.module.css';
// import supabase from '@/util/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Page() {
	const supabase = createServerComponentClient({ cookies });
	const { data: businesses } = await supabase.from('business').select();

	// return <pre>{JSON.stringify(businesses, null, 2)}</pre>;
	return (
		<main>
			<section id='businesses'>
				<div className={`${styles.business_grid} container`}>
					{/* {businesses?.map((business) => (
						<Card
							id={business.business_id}
							name={business.name}
							category={business.category}
						/>
					))} */}
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</div>
			</section>
		</main>
	);
}
