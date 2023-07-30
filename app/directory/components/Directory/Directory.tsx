'use client';

// Packages/Dependencies
import { useReducer } from 'react';
// Components
import Card from '../Card/Card';
// Styles
import styles from '../../page.module.css';
import buttonStyles from '../../../styles/utilities/button.module.css';
// Types
interface Business {
	business_id: string;
	category: 'restaurant' | 'shop' | 'service' | 'other' | null;
	description: string | null;
	name: string;
}
interface Props {
	data: Business[];
}
type Filter = { type: 'filter'; payload: string };
type Sort = { type: 'sortByName' | 'sortByNameReverse' };
type DirectoryAction = Filter | Sort;

export default function Directory({ data }: Props) {
	function sortByName() {
		dispatch({
			type: 'sortByName',
		});
	}
	function sortByNameReverse() {
		dispatch({
			type: 'sortByNameReverse',
		});
	}
	function filterByCategory(e: React.ChangeEvent<HTMLSelectElement>) {
		dispatch({
			type: 'filter',
			payload: e.target.value,
		});
	}
	const initialState = { data };
	const directoryReducer = (
		state: typeof initialState,
		action: DirectoryAction
	): typeof initialState => {
		switch (action.type) {
			case 'filter': {
				if (action.payload === 'none') {
					return {
						...state,
						data,
					};
				} else
					return {
						...state,
						data: data.filter(
							(business) => business.category === action.payload
						),
					};
			}
			case 'sortByName': {
				return {
					...state,
					data: data.sort((a, b) => {
						return a.name > b.name ? 1 : -1;
					}),
				};
			}

			case 'sortByNameReverse': {
				return {
					...state,
					data: data.sort((a, b) => {
						return b.name > a.name ? 1 : -1;
					}),
				};
			}
			default:
				throw new Error();
		}
	};
	const [state, dispatch] = useReducer(directoryReducer, initialState);

	return (
		<>
			<div className='container'>
				<div className={styles.buttons_container}>
					<h6>Sort by:</h6>
					<div className={styles.buttons}>
						<button onClick={sortByName} className={buttonStyles.button_large}>
							Name A-Z
						</button>
						<button
							onClick={sortByNameReverse}
							className={buttonStyles.button_large}>
							Name Z-A
						</button>
					</div>
					<div>
						<h6>Filter by:</h6>
						<select
							name='category'
							onChange={filterByCategory}
							className={styles.filter_button}
							defaultValue='none'>
							<option value='restaurant'>Restaurant</option>
							<option value='shop'>Shop</option>
							<option value='service'>Service</option>
							<option value='none'>No Filter</option>
						</select>
					</div>
				</div>
			</div>

			<div className={styles.business_grid}>
				{state.data.map((business: Business) => (
					<Card key={business.business_id} business={business} />
				))}
			</div>
		</>
	);
}
