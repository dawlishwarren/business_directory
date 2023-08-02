import styles from "./table.module.css";
interface Props {
	length: number;
	resultsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	length,
	resultsPerPage,
	currentPage,
	onPageChange,
}: Props) {
	const numberOfPages = Math.ceil(length / resultsPerPage);
	const pagesArray = Array.from({ length: numberOfPages }, (_, i) => i + 1);

	return (
		<div>
			<h6>
				{length} Results loaded. Page {currentPage} of {numberOfPages}{" "}
				{numberOfPages === 0 ? "page" : "pages"} with {resultsPerPage} results
				per page.
			</h6>

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
