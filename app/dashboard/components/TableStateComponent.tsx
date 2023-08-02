"use client";
// Packages/Dependencies
import { useState, useEffect, MouseEvent } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// Components
// Styles
// Types
import { Database } from "@/types/supabase";
interface Business {
	business_id: string;
	name: string;
}

export default function TableStateComponent() {
	const supabase = createClientComponentClient<Database>();
	const [businesses, setBusinesses] = useState<Business[]>([]);
	const [resultsPerPage, setResultsPerPage] = useState<number>(3);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);

	const getData = async () => {
		const { data, error } = await supabase.from("business").select();
		if (data) {
			setBusinesses(data);
			const pages = Math.ceil(data?.length / resultsPerPage);
			setNumberOfPages(pages);
		}
		if (error) console.log(error);
	};
	useEffect(() => {
		getData();
	}, []);

	function updateResultsPerPage(e: MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setResultsPerPage(parseInt((e.target as HTMLButtonElement).innerHTML));
	}

	return (
		<>
			<caption>{businesses?.length} results found.</caption>
			<caption>Showing {resultsPerPage} results per page</caption>
			<div className="container">
				<div className="buttons">
					<button onClick={updateResultsPerPage}>1</button>
					<button onClick={updateResultsPerPage}>2</button>
					<button onClick={updateResultsPerPage}>3</button>
				</div>
				{children}
				<div className="buttons">Pages: {numberOfPages}</div>
			</div>
		</>
	);
}
