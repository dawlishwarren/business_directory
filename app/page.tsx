import EmailForm from './components/EmailForm/EmailForm';
import GradientRotation from './components/GradientRotation/GradientRotation';
import PhoneImage from './components/PhoneImage';
import styles from './page.module.css';
import buttonStyles from './styles/utilities/button.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			{/* Hero Section */}
			<section id='hero' className={styles.hero_section}>
				<GradientRotation id='phone'>
					<div className={`${styles.hero_container} container`}>
						<div className={styles.heading_container}>
							<h1 className={`${styles.heading} high`}>
								Your Local Community, in the <strong>palm of your hands</strong>
							</h1>
						</div>
						<div className={styles.buttons_container}>
							<Link
								href='/directory'
								className={`${buttonStyles.button_large} button`}>
								Try out the directory
							</Link>
							<button
								className={`${buttonStyles.button_large} ${styles.search_button} button`}>
								Search...
							</button>
						</div>
						<div className={styles.image_container}>
							<PhoneImage />
						</div>
					</div>
				</GradientRotation>
			</section>
			{/* About Section */}
			<section id='about' className={styles.about_section}>
				<div className={`${styles.about_container} container`}>
					<div className={styles.grid_top_border}></div>
					<div className={styles.about_grid}>
						<div
							className={`${styles.about_grid_top_left} ${styles.about_grid_section}`}>
							<h3 className={styles.placeholder}>Placeholder</h3>
						</div>
						<div className={`${styles.about_grid_section}`}>
							<h3 className='uppercase high'>
								Directory Solutions Without The Faff
							</h3>
							<p className='body_1_center'>
								In an increasingly confusing online world, we aim to connect
								locals with their businesses in a way that is easy, intuitive,
								and comprehensive.
							</p>
						</div>
						<div className={`${styles.about_grid_section}`}>
							<h3 className='uppercase high'>Designed for community</h3>
							<p className='body_1_center'>
								Built to be simple and easy to replicate, there&apos;s no reason
								why every community can&apos;t have their own business directory
								at their fingertips.
							</p>
							<p className='body_1_center'>
								Managed by a designated admin, you won&apos;t find updates that
								ruin your flow or unnecessary features added.{' '}
							</p>
							<p className='body_1_center'>
								A win-win solution that helps business and locals alike.{' '}
							</p>
						</div>
						<div
							className={`${styles.about_grid_bottom_right} ${styles.about_grid_section}`}>
							<iframe
								className={styles.map}
								src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18851.546340905723!2d-1.5480595100924446!3d53.799395299393865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1687532356097!5m2!1sen!2suk'
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'></iframe>
						</div>
					</div>
					<div className={styles.grid_bottom_border}></div>
				</div>
			</section>
			<section id='contact' className={styles.contact_section}>
				<GradientRotation id='contactForm'>
					<h2 className='uppercase high'>Connect Your Town</h2>
					<div className={`${styles.contact_container} container`}>
						<aside className={styles.text_section}>
							<h5>Benefits</h5>
							<ul>
								<li>
									<p>Built and designed with accessibility in mind.</p>
								</li>
								<li>
									<p>
										All-in-one Supabase backend can easily scale to the task.
									</p>
								</li>
								<li>
									<p>Easy and secure authentication.</p>
								</li>
								<li>
									<p>
										Simple UI allows users to find the information they need,
										and nothing more.
									</p>
								</li>
								<li>
									<p>
										Simple CRUD functions allow admins to manage the database
										without needing any coding knowledge.
									</p>
								</li>
							</ul>
						</aside>
						<EmailForm />
					</div>
				</GradientRotation>
			</section>
		</main>
	);
}
