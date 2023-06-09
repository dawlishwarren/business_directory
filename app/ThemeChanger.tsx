import Image from 'next/image';
import themeChange from '../public/dark-theme-svgrepo-com.svg';
import styles from './header.module.css';
import { useRef } from 'react';

export default function ThemeChanger() {
	const dialogRef = useRef<any>(null);
	function openModal() {
		dialogRef.current.showModal();
	}
	function closeModal() {
		dialogRef.current.close();
	}
	return (
		<div className={styles.svg_container}>
			<Image
				src={themeChange}
				width={50}
				style={{ objectFit: 'contain' }}
				alt='Light/Dark Mode'
				onClick={openModal}
			/>
			<dialog ref={dialogRef}>
				Hello world!
				<button onClick={closeModal}>Close</button>
			</dialog>
		</div>
	);
}
