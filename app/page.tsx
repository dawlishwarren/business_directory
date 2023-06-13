import GradientRotation from './components/GradientRotation/GradientRotation';
import PhoneImage from './components/PhoneImage';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<GradientRotation>
			<div className='container'>
				<main className={styles.main}>
					<div className={styles.header_container}>
						<h1 className={styles.header}>
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
				</main>
			</div>
		</GradientRotation>
	);
}
