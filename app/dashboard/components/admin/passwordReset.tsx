"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function PasswordReset({ email }: { email: string }) {
	const supabase = createClientComponentClient();
	function handleClick() {
		supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${window.location.origin}/account/password-recovery`,
		});
	}
	return <button onClick={handleClick}>Reset Password</button>;
}
