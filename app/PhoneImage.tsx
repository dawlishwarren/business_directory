import Image from 'next/image';
import iPhone from '../public/iPhone 14 Pro Max - Space Black - Portrait.png';

export default function PhoneImage() {
	return (
		<Image
			src={iPhone}
			alt='image of iPhone 14'
			priority
			placeholder='blur'
			width={200}
			style={{ objectFit: 'contain' }}
		/>
	);
}
