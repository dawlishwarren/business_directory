'use client';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Page() {
	// const router = useRouter();
	// const supabase = createClientComponentClient<Database>();

	// const handleSignOut = async () => {
	// 	const { error } = await supabase.auth.signOut();
	// 	if (error) console.log(error);
	// 	router.push('/');
	// };
	return <button>Sign Out</button>;
}
