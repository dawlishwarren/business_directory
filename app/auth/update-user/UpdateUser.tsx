// Packages/Dependencies
import { Session } from '@supabase/auth-helpers-nextjs';
// Components
import NewEmailForm from './NewEmailForm';
import NewPasswordForm from './NewPasswordForm';

export default function UpdateUser({ session }: { session: Session | null }) {
	const user = session?.user;

	return (
		<>
			<section id='newEmail'>
				<NewEmailForm user={user} />
			</section>
			<section id='newPassword'>
				<NewPasswordForm user={user} />
			</section>
		</>
	);
}
