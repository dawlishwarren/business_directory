"use client";

import { useReducer } from "react";
import Card from "../Card/Card";
import styles from "../../page.module.css";

interface Business {
	business_id: string;
	category: "restaurant" | "shop" | "service" | "other" | null;
	description: string | null;
	name: string;
}

interface Props {
	data: Business[];
}

type Filter = { type: "filter"; payload: string };
type Sort = { type: "sortByName" | "sortByNameReverse" };
type DirectoryAction = Filter | Sort;

export default function Directory({ data }: Props) {
	const initialState = { data };

	const directoryReducer = (
		state: typeof initialState,
		action: DirectoryAction
	): typeof initialState => {
		switch (action.type) {
			case "filter": {
				if (action.payload === "none") {
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
			case "sortByName": {
				return {
					...state,
					data: data.sort((a, b) => {
						return a.name > b.name ? 1 : -1;
					}),
				};
			}

			case "sortByNameReverse": {
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

	function sortByName() {
		dispatch({
			type: "sortByName",
		});
	}
	// By town
	function sortByNameReverse() {
		dispatch({
			type: "sortByNameReverse",
		});
	}
	function filterByCategory(e: React.ChangeEvent<HTMLSelectElement>) {
		dispatch({
			type: "filter",
			payload: e.target.value,
		});
	}

	return (
		<section>
			<div className="container">
				<div className="buttons">
					<button onClick={sortByName} className="button_medium">
						Sort By Name
					</button>
					<button onClick={sortByNameReverse} className="button_medium">
						Sort By Name Reverse
					</button>
					<h6>Filter by:</h6>
					<select
						name="category"
						onChange={filterByCategory}
						className={styles.filter_button}
						defaultValue="none">
						<option value="restaurant">Restaurant</option>
						<option value="shop">Shop</option>
						<option value="service">Service</option>
						<option value="none">No Filter</option>
					</select>
				</div>
				<div className={styles.business_grid}>
					{state.data.map((business: Business) => (
						<Card key={business.business_id} business={business} />
					))}
				</div>
			</div>
		</section>
	);
}
