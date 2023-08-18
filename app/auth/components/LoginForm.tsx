'use client';

// Packages/Dependencies
import { Session } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// Styles
import navStyles from '@/app/styles/utilities/navItem.module.css';
import styles from './loginForm.module.css';

export default function LoginForm({ session }: { session: Session | null }) {
	const supabase = createClientComponentClient();
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};
	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
		});
		router.refresh();
	};

	return (
		<>
			{session ? (
				<a onClick={handleSignOut}>
					<h5 className={navStyles.nav_item}>Log Out</h5>
				</a>
			) : (
				<div className={styles.dropdown_parent}>
					<a onClick={handleSignIn}>
						<h5 className={navStyles.nav_item}>Login</h5>
					</a>
					<div className={styles.login_dropdown}>
						<label htmlFor='email'>Email</label>
						<input
							name='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
				</div>
			)}
		</>
	);
}
