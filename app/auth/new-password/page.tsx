"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

export default function Page() {
	const supabase = createClientComponentClient();
	const [newPassword, setNewPassword] = useState("");
// !!!!!!
// https://supabase.com/docs/guides/auth/auth-password-reset
// !!!!!!


	async function handleSubmit() {
	}

	return (
		<main>
			<h1>Create a new password</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="newPassword">New Password</label>
				<input
					type="password"
					name="newPassword"
					id="newPassword"
					value={newPassword || ""}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}
