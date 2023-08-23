// Packages/Dependencies
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
// Components
import LoginForm from './LoginForm';
// Types
import { Database } from '@/types/supabase';

export default async function Login() {
	const supabase = createServerComponentClient<Database>({ cookies });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return <LoginForm session={session} />;
}
