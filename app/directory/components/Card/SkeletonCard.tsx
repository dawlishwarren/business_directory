import styles from "./card.module.css";
import logo from "../../../../public/Profile_avatar_placeholder_large.png";
import Image from "next/image";
export default function SkeletonCard() {
	return (
		<div className={`${styles.card} ${styles.skeleton_card}`}>
			<div className={styles.skeleton_logo_container}>
				<Image
					alt="Placeholder of Business Logo"
					src={logo}
					width={100}
					style={{ objectFit: "contain" }}
				/>
			</div>
			<div className={styles.skeleton_overline}></div>
			<div className={styles.skeleton_name}></div>
		</div>
	);
}
