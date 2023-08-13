// Packages/Dependencies
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// Components
import { BusinessForm } from "../components/BusinessForm/BusinessForm";
// Types
import { FormValues } from "../../../../types/FormTypes";

export default async function Page() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) {
		redirect("/unauthenticated");
	}
	const formData: FormValues = {
		name: "",
		description: "",
		category: "Other",
		address: [
			{
				line_1: "",
				line_2: "",
				line_3: "",
				line_4: "",
				town: "",
				postcode: "",
			},
		],
		contact: [
			{
				phone: "",
				email: "",
				website: "",
			},
		],
	};
	return (
		<main>
			<div className="container">
				<BusinessForm isNewForm={true} formData={formData} />
			</div>
		</main>
	);
}
