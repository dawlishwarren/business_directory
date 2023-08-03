"use client";

import { useState } from "react";

import TablePaginator from "./TablePaginator";
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
}

export default function Table({ data }: Props) {
	const [resultsPerPage, setResultsPerPage] = useState<number>(2);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};
	const onResultsChange = (number: number) => {
		setResultsPerPage(number);
	};
	const startIndex = (currentPage - 1) * resultsPerPage;
	const paginatedData = data
		? data?.slice(startIndex, startIndex + resultsPerPage)
		: [];
	return (
		<section>
			<table className={styles.table}>
				<tbody>
					<tr className={styles.table_header}>
						<th className={styles.table_th}>
							<h6>Business</h6>
						</th>
					</tr>
					{paginatedData.map((business) => (
						<tr key={business.business_id}>
							<td className={styles.table_name_column}>{business.name}</td>
							<td className={styles.table_button_column}>
								<TableButton id={business.business_id} type="edit" />
							</td>
							<td className={styles.table_button_column}>
								<TableButton id={business.business_id} type="delete" />
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<th>Add a new business</th>
					</tr>
				</tfoot>
			</table>
			<TablePaginator
				length={data ? data.length : 0}
				resultsPerPage={resultsPerPage}
				currentPage={currentPage}
				onPageChange={onPageChange}
				onResultsChange={onResultsChange}
			/>
		</section>
	);
}
