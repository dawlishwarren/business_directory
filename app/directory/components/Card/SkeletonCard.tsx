// Packages/Dependencies
import Image from 'next/image';
// Components
import logo from '../../../../public/Profile_avatar_placeholder_large.png';
// Styles
import styles from './card.module.css';

// UI Skeleton used before pageload as a suspense fallback
export default function SkeletonCard() {
	return (
		<div className={`${styles.card} ${styles.skeleton_card}`}>
			<div className={styles.skeleton_logo_container}>
				<Image
					alt='Placeholder of Business Logo'
					src={logo}
					width={100}
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className={styles.skeleton_overline}></div>
			<div className={styles.skeleton_name}></div>
		</div>
	);
}
