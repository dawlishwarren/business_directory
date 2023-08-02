"use client";

import { useEffect, useState } from "react";
import Pagination from "./Pagination";
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
	const [numberOfPages, setNumberOfPages] = useState<number>(0);
	const [resultsPerPage, setResultsPerPage] = useState<number>(2);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};
	const startIndex = (currentPage - 1) * resultsPerPage;
	const paginatedData = data
		? data?.slice(startIndex, startIndex + resultsPerPage)
		: [];
	return (
		<section>
			{paginatedData.map((business) => (
				<div key={business.business_id}>
					<p>{business.name}</p>
				</div>
			))}
			<Pagination
				data={data}
				resultsPerPage={resultsPerPage}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>
		</section>
	);
}
