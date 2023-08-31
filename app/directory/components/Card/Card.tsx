// Packages/Dependencies
import Link from 'next/link';
// Components
import styles from '../../page.module.css';
// Styles
import Image from 'next/image';
import placeholderLogo from '../../../../public/Profile_avatar_placeholder_large.png';
// Types
interface Data {
	business_id: string;
	category: 'restaurant' | 'shop' | 'service' | 'other' | null;
	name: string;
}

export default function Card({ business }: { business: Data }) {
	const { name, category, business_id } = business;
	return (
		<Link className={styles.card} href={`/directory/business/${business_id}`}>
			<div className={styles.card_content}>
				<div className={styles.card_content_image}>
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
						alt='Placeholder Business Logo'
						width={100}
						style={{ objectFit: 'contain' }}
					/>
					{/* )} */}
				</div>
				<div className={styles.card_content_info}>
					<p className={`${styles.card_content_info_category} overline`}>
						{category}
					</p>
					<h6 className={styles.card_content_info_name}>
						<b>{name}</b>
					</h6>
				</div>
			</div>
		</Link>
	);
}
