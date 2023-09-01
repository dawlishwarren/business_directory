"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function PasswordRecoveryPage() {
	const [email, setEmail] = useState("");
	const supabase = createClientComponentClient();

	/**
	 * Step 1: Send the user an email to get a password reset token.
	 * This email contains a link which sends the user back to your application.
	 */
	async function handleSubmit() {
		const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: "http://localhost:3000/auth/password-recovery",
		});
		if (data) console.log(data);
		if (error) console.log(error);
		console.log("Submitted to", email);
	}

	/**
	 * Step 2: Once the user is redirected back to your application,
	 * ask the user to reset their password.
	 */
	useEffect(() => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			if (event == "PASSWORD_RECOVERY") {
				const newPassword = prompt(
					"What would you like your new password to be?"
				);
				if (newPassword) {
					const { data, error } = await supabase.auth.updateUser({
						password: newPassword,
					});

					if (data) alert("Password updated successfully!");
					if (error) alert("There was an error updating your password.");
				}
			}
		});
	}, [supabase]);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email || ""}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type="submit">Send password reset link</button>
			</form>
		</div>
	);
}
