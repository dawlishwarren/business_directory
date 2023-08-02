import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Table from "./components/Table";

export default async function Page() {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data, error } = await supabase.from("business").select();
	if (error) console.error(error);
	return (
		<main>
			<div className="container">
				<h1>Dashboard</h1>
				<Table data={data} />
			</div>
		</main>
	);
}
