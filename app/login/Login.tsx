"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Login() {
	const supabase = createClientComponentClient<Database>();
	const router = useRouter();

	// State
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		router.refresh();
	};
	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
		});
		router.refresh();
	};
	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};
	return (
		<div>
			<input
				name="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<input
				type="password"
				name="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<button onClick={handleSignUp}>Sign Up</button>
			<button onClick={handleSignIn}>Sign In</button>
			<button onClick={handleSignOut}>Sign Out</button>
		</div>
	);
}
