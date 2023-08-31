'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/supabase-js';
import { useRef, useState } from 'react';

export default function NewPasswordForm({ user }: { user: User | undefined }) {
	const supabase = createClientComponentClient();
	const newPasswordRef = useRef<any>(null);

	const [email, setEmail] = useState(user?.email);
	const [newPassword, setNewPassword] = useState('');
	const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
	async function handleSubmit() {
		//
	}
	function openDialog() {
		newPasswordRef.current.showModal();
	}
	function closeDialog() {
		newPasswordRef.current.close();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='newPasswordEmail'>Email</label>
				<input
					id='newPasswordEmail'
					type='email'
					name='email'
					value={email}
					disabled={user?.email != undefined ? true : false}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='newPassword'>New Password</label>
				<input
					type='password'
					id='newPassword'
					value={newPassword || ''}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				<button type='button' onClick={openDialog}>
					Update Password
				</button>
				<dialog ref={newPasswordRef}>
					<label htmlFor='newPasswordConfirmation'>
						Confirm your new password
					</label>
					<input
						type='password'
						name='newPasswordConfirmation'
						id='newPasswordConfirmation'
						value={newPasswordConfirmation || ''}
						onChange={(e) => setNewPasswordConfirmation(e.target.value)}
					/>
					<button type='button' onClick={closeDialog}>
						Cancel
					</button>
					<button
						type='submit'
						disabled={newPassword === newPasswordConfirmation ? false : true}>
						Submit
					</button>
				</dialog>
			</form>
		</>
	);
}
