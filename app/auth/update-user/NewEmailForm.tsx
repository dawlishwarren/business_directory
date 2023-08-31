'use client';
// Packages/Dependencies
import { useRef, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

export default function NewEmailForm({ user }: { user: User | undefined }) {
	const supabase = createClientComponentClient();
	const newEmailRef = useRef<any>(null);

	const [email, setEmail] = useState(user?.email);
	const [newEmail, setNewEmail] = useState('');
	const [newEmailConfirmation, setNewEmailConfirmation] = useState('');

	async function handleSubmit() {
		const { data, error } = await supabase.auth.updateUser({
			email: newEmail,
		});
		if (data) {
			console.log(data);
		} else if (error) console.log(error);
		redirect('/auth/dashboard');
	}
	function openDialog() {
		newEmailRef.current.showModal();
	}
	function closeDialog() {
		newEmailRef.current.close();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='newEmailEmail'>Current Email</label>
				<input
					id='newEmailEmail'
					type='email'
					name='email'
					value={email}
					disabled={user?.email != undefined ? true : false}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='newEmail'>New Email</label>
				<input
					id='newEmail'
					type='email'
					value={newEmail || ''}
					onChange={(e) => setNewEmail(e.target.value)}
				/>
				<button type='button' onClick={openDialog}>
					Change Email
				</button>
				<dialog ref={newEmailRef}>
					<label htmlFor='newEmailConfirmation'>
						Confirm your new email address
					</label>
					<input
						type='email'
						id='newEmailConfirmation'
						value={newEmailConfirmation || ''}
						onChange={(e) => setNewEmailConfirmation(e.target.value)}
					/>
					<button type='button' onClick={closeDialog}>
						Cancel
					</button>
					<button
						type='submit'
						disabled={newEmail === newEmailConfirmation ? false : true}>
						Submit
					</button>
				</dialog>
			</form>
		</>
	);
}
