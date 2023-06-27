import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<div className='footer_wrapper'>
				<div>Developed by Alex Warren</div>
				<Link href='/sitemap'>Site Map</Link>
			</div>
		</footer>
	);
}
