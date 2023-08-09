'use client';
// Packages/Dependencies
import Link from 'next/link';
// Styles
import buttonStyles from '../../../styles/utilities/button.module.css';
// Types
interface Props {
	id: string;
	type: 'edit' | 'delete';
}

export default function BusinessTableButton({ id, type }: Props) {
	function handleDelete() {
		console.log('Delete');
	}
	if (type === 'edit') {
		return (
			<Link
				href={`/directory/business/${id}/edit`}
				className={`${buttonStyles.button_small} ${buttonStyles.button_edit}`}>
				<p className='overline'>Edit</p>
			</Link>
		);
	} else if (type === 'delete') {
		return (
			<button
				className={`${buttonStyles.button_small} ${buttonStyles.button_delete}`}
				onClick={handleDelete}>
				<p className='overline'>Delete</p>
			</button>
		);
	} else {
		return;
	}
}
