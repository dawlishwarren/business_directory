"use client";

// Packages/Dependencies
import { Session } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
// Components
import Link from "next/link";
// Styles
import navStyles from "@/app/styles/utilities/navItem.module.css";
import styles from "./loginForm.module.css";
import buttonStyles from "@/app/styles/utilities/button.module.css";

export default function LoginForm({ session }: { session: Session | null }) {
	const supabase = createClientComponentClient();
	const router = useRouter();
	const pathname = usePathname();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hidden, setHidden] = useState(true);

	const toggleHidden = () => {
		setHidden(!hidden);
	};

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
		router.push("/auth/dashboard");
	};

	return (
		<>
			{session ? (
				<>
					<Link href="/auth/dashboard">
						<h5
							className={
								pathname == "/auth/dashboard"
									? navStyles.disabled
									: navStyles.nav_item
							}>
							Dashboard
						</h5>
					</Link>
					<button onClick={handleSignOut} className={styles.nav_button}>
						<h5 className={navStyles.nav_item}>Log Out</h5>
					</button>
				</>
			) : (
				<div className={styles.dropdown_parent}>
					<button onClick={toggleHidden} className={styles.nav_button}>
						<h5 className={navStyles.nav_item}>Login</h5>
					</button>
					<div
						aria-hidden={hidden ? "true" : "false"}
						className={`${styles.dropdown_wrapper} ${
							hidden ? styles.hidden : styles.active
						}`}>
						<div className={styles.login_form}>
							<label htmlFor="loginEmail">Email</label>
							<input
								id="loginEmail"
								name="loginEmail"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							<label htmlFor="loginPassword">Password</label>
							<input
								id="loginPassword"
								type="password"
								name="loginPassword"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
							<button
								className={`${buttonStyles.button_small} ${styles.submit}`}
								type="submit"
								onClick={handleSignIn}>
								Log in
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
