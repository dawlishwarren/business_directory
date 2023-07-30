// Components
import SkeletonCard from '../Card/SkeletonCard';
// Styles
import styles from '../../page.module.css';
export default function LoadingSkeleton() {
	return (
		<main>
			<section>
				<div className={`${styles.business_grid} container`}>
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</div>
			</section>
		</main>
	);
}
