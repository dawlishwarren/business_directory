"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { useTheme } from "next-themes";
import styles from "./authForm.module.css";
import buttonStyles from "../styles/utilities/button.module.css";

export default function AuthForm() {
	const supabase = createClientComponentClient<Database>();
	const { theme } = useTheme();

	return (
		<Auth
			supabaseClient={supabase}
			view="sign_in"
			appearance={{
				extend: false,
				className: {
					anchor: `${styles.link}`,
					button: `${buttonStyles.button_medium}`,
					container: `${styles.container}`,
					input: `${styles.input}`,
					label: `${styles.label}`,
					loader: `${styles.loader}`,
					message: `${styles.message}`,
				},
			}}
			theme={"default"}
			showLinks={false}
			providers={[]}
			redirectTo="http://localhost:3000/auth/callback"
		/>
	);
}
