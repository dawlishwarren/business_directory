'use client';

import { Formik, FormikHelpers, Form, Field } from 'formik';
import styles from './emailForm.module.css';
import buttonStyles from '../../styles/utilities/button.module.css';
interface Values {
	email: string;
	message: string;
}

export default function EmailForm() {
	return (
		<Formik
			initialValues={{ email: '', message: '' }}
			onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 200);
			}}>
			<Form id='contactForm' className={styles.form}>
				<label htmlFor='email'>
					<h6 className='overline'>Email</h6>
				</label>
				<Field id='email' name='email' placeholder='Your email' type='email' />

				<label htmlFor='message'>
					<h6 className='overline'>Message</h6>
				</label>
				<Field
					className={styles.textarea}
					id='message'
					name='message'
					placeholder='Your message'
					as='textarea'
				/>
				<button type='submit' className={buttonStyles.button_medium}>
					<p className='button'>Submit</p>
				</button>
			</Form>
		</Formik>
	);
}
