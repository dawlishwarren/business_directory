import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import UpdateUser from './UpdateUser';

export default async function Page() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) {
		redirect('/auth/unauthenticated');
	}
	return (
		<section>
			<Breadcrumb
				items={[
					{ label: 'Home', path: '/' },
					{ label: 'Dashboard', path: '/auth/dashboard' },
					{ label: 'Update User', path: '/auth/update-user' },
				]}
			/>
			<h1>Update User!</h1>
			<UpdateUser session={session} />
		</section>
	);
}
