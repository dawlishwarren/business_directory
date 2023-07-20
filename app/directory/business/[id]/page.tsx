

export default async function Page({
	params: { id },
}: {
	params: { id: string };
}) {
	const supabase = createServerComponentClient<Database>({ cookies });
	const {
		data: business,
		error,
		status,
	} = await supabase
		.from('business')
		.select(
			`*,
			address(
				line_1,
				line_2,
				line_3,
				line_4,
				town,
				postcode,
				id
			), contact (
				email,
				website,
				phone,
				address_id
			)
			`
		)
		.eq('business_id', id);

	const { name, description, category, address, contact } = business![0];
