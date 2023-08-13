// Packages/Dependencies
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// Components
import Link from "next/link";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { BusinessForm } from "../../components/BusinessForm/BusinessForm";
// Styles
import buttonStyles from "../../../../styles/utilities/button.module.css";
// Types
import { Database } from "@/types/supabase";
import { FormValues } from "../../../../../types/FormTypes";

// 1. Page takes the business id as params from the Dynamic Segment
export default async function Page({
	params: { id },
}: {
	params: { id: string };
}) {
	// 2. Uses the id to query the database for a business with that id.
	const supabase = createServerComponentClient<Database>({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) {
		redirect("/unauthenticated");
	}
	const {
		data: business,
		error,
		status,
	} = await supabase
		.from("business")
		.select(
			`*,
			address(
				line_1,
				line_2,
				line_3,
				line_4,
				town,
				postcode
			), contact (
				email,
				website,
				phone,
				address_id
			)
			`
		)
		.eq("business_id", id);

	if (error && status !== 406) {
		throw error;
	}
	const { name, category, description, address, contact } = business![0];
	const data: FormValues = {
		name: name,
		category: category,
		description: description,
		address: address,
		contact: contact,
		business_id: id,
	};

	return (
		<main>
			<Breadcrumb
				items={[
					{ label: "Directory", path: "/directory" },
					{ label: `${name}`, path: `/directory/business/${id}` },
					{ label: "Edit", path: `/directory/business/${id}/edit` },
				]}
			/>
			<Link href="/dashboard">
				<button
					className={buttonStyles.button_small}
					style={{ marginLeft: "3rem" }}>
					&#8592; Back to Dashboard
				</button>
			</Link>
			<div className="container">
				{/* 3. Passes the response as an object of formData into the MultiStepForm */}
				<BusinessForm isNewForm={false} formData={data} />
			</div>
		</main>
	);
}
