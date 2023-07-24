import { Database } from "@/types/supabase";
import Directory from "./components/Directory/Directory";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import styles from "./page.module.css";
import gradientStyles from "../styles/utilities/gradients.module.css";

export default async function Page() {
	// Query DB server side before page load
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data: businesses } = await supabase.from("business").select();
	if (!businesses) {
		return <p>No businesses found!</p>;
	}
	return (
		<main>
			<section>
				<div className={styles.directory_container}>
					<h1 className={gradientStyles.title_text_rtl}>Purple Pages</h1>
					<Directory data={businesses} />
				</div>
			</section>
		</main>
	);
}
