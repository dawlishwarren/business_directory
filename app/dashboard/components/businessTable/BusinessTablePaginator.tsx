// Styles
import styles from './table.module.css';
// Types
interface Props {
	dataLength: number;
	resultsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	onResultsChange: (number: number) => void;
}

export default function BusinessTablePaginator({
	dataLength,
	resultsPerPage,
	currentPage,
	onPageChange,
	onResultsChange,
}: Props) {
	const numberOfPages = Math.ceil(dataLength / resultsPerPage);
	const pagesArray = Array.from({ length: numberOfPages }, (_, i) => i + 1);

	return (
		<div className={styles.pagination_options}>
			<p>
				{dataLength} Results loaded. Page {currentPage} of {numberOfPages}{' '}
				{numberOfPages === 0 ? 'page' : 'pages'} with {resultsPerPage} results
				per page.
			</p>
			<h6>Set results per page:</h6>
			<ul>
				<li className={styles.pageItem}>
					<a onClick={() => onResultsChange(2)}>2</a>
				</li>
				<li className={styles.pageItem}>
					<a onClick={() => onResultsChange(3)}>3</a>
				</li>
				<li className={styles.pageItem}>
					<a onClick={() => onResultsChange(4)}>4</a>
				</li>
			</ul>

			<ul className={styles.pagination}>
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
