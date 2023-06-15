import GradientRotation from './components/GradientRotation/GradientRotation';
import PhoneImage from './components/PhoneImage';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<GradientRotation>
				<div className='container'>
					<section id='hero' className={styles.hero_section}>
						<div className={styles.heading_container}>
							<h1 className={styles.heading}>
								Your Local Community, in the <strong>palm of your hands</strong>
							</h1>
						</div>
						<div className={styles.buttons_container}>
							<button className='button'>Search...</button>
							<button className='button'>
								<Link href='/directory'>Try out the directory</Link>
							</button>
						</div>
						<div className={styles.image_container}>
							<PhoneImage />
						</div>
					</section>
				</div>
			</GradientRotation>

			<div className='container'>
				<section id='about' className={styles.about_section}>
					<div className={styles.grid_top_border}></div>
					<div className={styles.about_grid}>
						<div className={styles.about_grid_top_left}>
							<h3 className={styles.grid_title}>Placeholder</h3>
						</div>
						<div>
							<h3>Top Right</h3>
						</div>
						<div>
							<h3>Bottom Left</h3>
						</div>
						<div className={styles.about_grid_bottom_right}>
							<h3 className={styles.grid_title}>Placeholder</h3>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
