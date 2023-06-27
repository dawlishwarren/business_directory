import { UUID } from 'crypto';
import Link from 'next/link';
import { Url } from 'url';
import styles from './card.module.css';

interface Props {
	id: UUID;
	category: string;
	name: string;
	logo?: Url;
}

export default function Card({ id, category, name, logo }: Props) {
	return (
		<Link href={`/directory/business/${id}`}>
			<div className={styles.card}>
				<p className='overline'>{category}</p>
				<h5>{name}</h5>
			</div>
		</Link>
	);
}
