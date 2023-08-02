'use client';
import { useState, useEffect } from 'react';
import TableButton from './TableButton';
interface Props {
	businesses: Business[] | null;
}
interface Business {
	business_id: string;
	name: string;
}

export default async function BusinessTable({ businesses }: Props) {
	// const [resultsPerPage, setResultsPerPage] = useState<number>(0);
	// const [page, setPage] = useState<number>(0);
	// const [numberOfPages, setNumberOfPages] = useState<number>(0);
	// const [data, setData] = useState<Business[]>();
	// useEffect(() => {
	// 	setResultsPerPage(10);
	// 	setPage(1);
	// 	if (businesses && businesses.length > 0) {
	// 		const pages = Math.abs(businesses.length / resultsPerPage);
	// 		setNumberOfPages(pages);
	// 		setData(businesses?.slice(0, resultsPerPage));
	// 	}
	// }, [businesses, resultsPerPage]);

	return (
		<>
			<table>
				<caption>Business Database manager</caption>
				<th>Business</th>
				{businesses &&
					businesses?.map((business, index) => (
						<tr key={index}>
							<td>{business.name}</td>
							<td>
								<TableButton id={business.business_id} type='edit' />
							</td>
							<td>
								<TableButton id={business.business_id} type='delete' />
							</td>
						</tr>
					))}
			</table>

			{/* <div className='buttons'>{numberOfPages}</div> */}
		</>
	);
}
