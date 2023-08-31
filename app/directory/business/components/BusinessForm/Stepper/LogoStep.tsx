import { ChangeEvent, useState } from 'react';
import styles from '../businessForm.module.css';
import buttonStyles from '@/app/styles/utilities/button.module.css';
import { Field, ErrorMessage } from 'formik';
export default function LogoStep() {
	const [imagePreview, setImagePreview] = useState<File | undefined>();

	function imageChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.files && e.target.files.length > 0) {
			setImagePreview(e.target.files[0]);
		}
	}

	function removePreview() {
		setImagePreview(undefined);
	}

	return (
		<>
			<div className={styles.field_container}>
				<label htmlFor='logo'>
					<h4>Add your logo (optional)</h4>
				</label>
				<Field
					className={styles.field}
					component='input'
					id='logo'
					name='logo'
					type='file'
					accept='image/*'
					onChange={imageChange}
				/>
				<ErrorMessage
					className={`${styles.form_error} error`}
					component='div'
					name='logo'
				/>
			</div>
			{imagePreview && (
				<div className={styles.preview_container}>
					<img
						className={styles.image_preview}
						src={URL.createObjectURL(imagePreview)}
						alt='Thumbnail'
					/>
					<button
						onClick={removePreview}
						className={`${buttonStyles.button_small} ${buttonStyles.button_delete}`}>
						Remove This Image
					</button>
				</div>
			)}
		</>
	);
}
