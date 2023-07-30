import Link from "next/link";
import { ReactNode } from "react";
import styles from "./breadcrumb.module.css";
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
