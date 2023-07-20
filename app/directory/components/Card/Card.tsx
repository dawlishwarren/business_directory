import { UUID } from "crypto";
import Link from "next/link";
import styles from "../../page.module.css";
import Image from "next/image";
import placeholderLogo from "../../../../public/Profile_avatar_placeholder_large.png";

interface Data {
	business_id: string;
	category: "restaurant" | "shop" | "service" | "other" | null;
	description: string | null;
	name: string;
}

export default function Card({ business }: { business: Data }) {
	const { name, category, description, business_id } = business;
	return (
		<Link className={styles.card} href={`/directory/business/${business_id}`}>
			<div className={styles.logo_container}>
				{/* {logo ? (
					<Image
						src={logo}
						alt="Business Logo"
						width={100}
						style={{ objectFit: "contain" }}
					/>
				) : ( */}
				<Image
					src={placeholderLogo}
					alt="Placeholder Business Logo"
					width={100}
					style={{ objectFit: "contain" }}
				/>
				{/* )} */}
			</div>
			<div className={styles.card_overline}>
				<p className="overline">{category}</p>
			</div>
			<div className={styles.card_name}>
				<h6>
					<b>{name}</b>
				</h6>
			</div>
		</Link>
	);
}
