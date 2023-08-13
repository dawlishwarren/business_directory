"use client";

import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

export default function PasswordRecoveryPage() {
	const [state, setState] = useState<"default" | "resetting">("default");
	const [password, setPassword] = useState("");
	const [passwordRepeat, setPasswordRepeat] = useState("");
	const router = useRouter();
	const accessToken = router.query.access_token as string;

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (password !== passwordRepeat) {
		}
	};
}
