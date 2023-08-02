import { useEffect } from "react";
import TableButton from "./TableButton";
import styles from "./table.module.css";
interface Props {
	data:
		| {
				business_id: string;
				category: "restaurant" | "shop" | "service" | "other";
				description: string;
				name: string;
		  }[]
		| null;
	resultsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}
export default function Pagination({
	data,
	resultsPerPage,
	currentPage,
	onPageChange,
}: Props) {
	const numberOfPages = data ? Math.ceil(data.length / resultsPerPage) : 0;
	const pagesArray = Array.from({ length: numberOfPages }, (_, i) => i + 1);

	return (
		<div>
			<ul>
				{pagesArray?.map((page) => (
					<li
						key={page}
						className={
							page === currentPage ? styles.pageItemActive : styles.pageItem
						}>
						<a className={styles.pageLink} onClick={() => onPageChange(page)}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
