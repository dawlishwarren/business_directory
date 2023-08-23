// Packages/Dependencies
import iPhone from '../../public/iPhone 14 Pro Max - Space Black - Portrait.png';
// Components
import Image from 'next/image';

export default function PhoneImage() {
	return (
		<Image
			id='phone'
			src={iPhone}
			alt='image of iPhone 14'
			priority
			placeholder='blur'
			width={200}
			style={{ objectFit: 'contain' }}
		/>
	);
}
