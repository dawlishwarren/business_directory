"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FormEventHandler, useState } from "react";

export default function Page() {
	const [email, setEmail] = useState("");
	const supabase = createClientComponentClient();

	const handleSubmit: FormEventHandler<HTMLFormElement> = () => {
		supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${window.location.origin}/auth/new-password`,
		});
	};
	return (
		<main>
			<h1>Forgotten Your Password?</h1>
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
		</main>
	);
}
