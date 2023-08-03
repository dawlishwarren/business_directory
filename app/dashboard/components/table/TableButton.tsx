"use client";

import Link from "next/link";
import buttonStyles from "../../../styles/utilities/button.module.css";
interface Props {
	id: string;
	type: "edit" | "delete";
}

function handleDelete() {
	console.log("Delete");
}
export default function TableButton({ id, type }: Props) {
	if (type === "edit") {
		return (
			<Link href={`/directory/business/${id}/edit`}>
				<button
					className={`${buttonStyles.button_small} ${buttonStyles.button_edit}`}>
					<p className="overline">Edit</p>
				</button>
			</Link>
		);
	} else if (type === "delete") {
		return (
			<button
				className={`${buttonStyles.button_small} ${buttonStyles.button_delete}`}
				onClick={handleDelete}>
				<p className="overline">Delete</p>
			</button>
		);
	} else {
		return;
	}
}
