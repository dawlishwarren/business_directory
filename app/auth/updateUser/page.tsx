import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

export default function Page() {
	return (
		<section>
			<Breadcrumb
				items={[
					{ label: 'Home', path: '/' },
					{ label: 'Auth', path: '/auth/dashboard' },
					{ label: 'Update User', path: '/auth/updateUser' },
				]}
			/>
			<h1>Update User!</h1>
		</section>
	);
}
