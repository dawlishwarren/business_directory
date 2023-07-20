import Link from 'next/link';
import { ReactNode } from 'react';
export type CrumbItem = {
	label: ReactNode;
	path: string;
};
export type BreadcrumbProps = {
	items: CrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<>
			{items.map((crumb, index) => {
				const isLastItem = index === items.length - 1;
				if (!isLastItem) {
					return (
						<>
							<Link href={crumb.path} key={index}>
								{crumb.label}
							</Link>
							<span> / </span>
						</>
					);
				} else {
					return crumb.label;
				}
			})}
		</>
	);
}
