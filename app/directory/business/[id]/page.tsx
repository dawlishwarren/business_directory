// Packages/Dependencies
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// Components
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
// Styles
import styles from "./page.module.css";
import gradientStyles from "../../../styles/utilities/gradients.module.css";

export default async function Page({
	params: { id },
}: {
	params: { id: string };
}) {
	const supabase = createServerComponentClient<Database>({ cookies });

	const { data: business } = await supabase
		.from("business")
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
		.eq("business_id", id);

	const { name, description, category, address, contact } = business![0];

	return (
		<main>
			<section>
				<Breadcrumb
					items={[
						{ label: "Directory", path: "/directory" },
						{ label: `${name}`, path: `/directory/business/${id}` },
					]}
				/>
				<div className="container">
					<div className={`${styles.row} ${styles.title}`}>
						<div className={styles.column}>
							<div className={styles.title_container}>
								<h1 className={gradientStyles.title_text_ltr}>{name}</h1>
								<p className="overline">{category}</p>
							</div>
						</div>
					</div>
					<div className={styles.row_no_wrap}>
						<div className={`${styles.column} ${styles.description}`}>
							<p className="body_1">{description}</p>
							<p className="body_1">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
								quisquam laudantium corporis deleniti pariatur mollitia nemo,
								eum quasi placeat quia suscipit nam rem. Veniam fuga officiis
								doloribus amet eaque neque?
							</p>
						</div>
						<div className={`${styles.column} ${styles.details}`}>
							{address &&
								address.map((address, index) => (
									<div className={styles.address_container} key={index}>
										<h5 className={styles.address_name}>
											{address.line_1.replace(/[0-9]/g, "")}
										</h5>
										<div className="address_details">
											<p>{address.line_1}</p>
											{address.line_2 && <p>{address.line_2}</p>}
											{address.line_3 && <p>{address.line_3}</p>}
											{address.line_4 && <p>{address.line_4}</p>}
											<p>{address.town}</p>
											<p>{address.postcode}</p>
										</div>
										<div className="contact_details">
											{contact &&
												contact.map((contact, index) => (
													<>
														{contact.address_id === address.id && (
															<span key={index}>
																<p>{contact.phone}</p>
																<p>{contact.email}</p>
																<Link key={index} href={contact.website}>
																	<h6 className={styles.website_link}>
																		Visit website
																	</h6>
																</Link>
															</span>
														)}
													</>
												))}
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
