'use client';
// Packages/Dependencies
import { useState } from 'react';
import Link from 'next/link';

// Components
import BusinessTablePaginator from './BusinessTablePaginator';
import BusinessTableButton from './BusinessTableButton';

// Styles
import styles from './businessTable.module.css';
import buttonStyles from '../../../styles/utilities/button.module.css';

// Types
interface Props {
	data:
		| {
				business_id: string;
				category: 'restaurant' | 'shop' | 'service' | 'other';
				description: string;
				name: string;
		  }[]
		| null;
}

export default function BusinessTable({ data }: Props) {
	const [resultsPerPage, setResultsPerPage] = useState<number>(
		data ? data.length : 1
	);
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
		<>
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
								<BusinessTableButton id={business.business_id} type='edit' />
							</td>
							<td className={styles.table_button_column}>
								<BusinessTableButton id={business.business_id} type='delete' />
							</td>
						</tr>
					))}
				</tbody>
				<tfoot className={styles.table_footer} />
			</table>
			<div className={styles.add_button_box}>
				<Link
					href='/directory/business/new'
					className={buttonStyles.button_medium}>
					Add a new business
				</Link>
			</div>
			<BusinessTablePaginator
				dataLength={data ? data.length : 0}
				resultsPerPage={resultsPerPage}
				currentPage={currentPage}
				onPageChange={onPageChange}
				onResultsChange={onResultsChange}
			/>
		</>
	);
}
