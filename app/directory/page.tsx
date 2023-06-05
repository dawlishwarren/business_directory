import { Fragment } from "react";
import supabase from "@/util/supabase";

export default async function Page() {
	const { data: businesses } = await supabase.from("business").select();

	return <pre>{JSON.stringify(businesses, null, 2)}</pre>;
}
