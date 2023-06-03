import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Headline 1</h1>
			<h2>Headline 2</h2>
			<h3>Headline 3</h3>
			<h4>Headline 4</h4>
			<h5>Headline 5</h5>
			<h6>Headline 6</h6>
			<p className="body_1">Body 1</p>
			<p className="body_2">Body 2</p>
			<button className="button">Button</button>
			<p className="error">Error Message</p>
			<Link href="/directory">Directory</Link>
		</main>
	);
}
