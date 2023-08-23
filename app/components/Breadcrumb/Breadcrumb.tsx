// Packages/Dependencies
import { ReactNode } from 'react';
// Components
import Link from 'next/link';
// Styles
import styles from './breadcrumb.module.css';
// Types
export type CrumbItem = {
	label: ReactNode;
	path: string;
};
export type BreadcrumbProps = {
	items: CrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<div className={styles.container}>
			{items.map((crumb, index) => {
				const isLastItem = index === items.length - 1;
				if (!isLastItem) {
					return (
						<>
							<Link href={crumb.path} key={index} className={styles.label}>
								{crumb.label}
							</Link>
							<span> / </span>
						</>
					);
				} else {
					return crumb.label;
				}
			})}
		</div>
	);
}
