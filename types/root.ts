export interface PageProps {
	businesses: Array<Business>;
}
interface Logo {
	id: string;
	logo_url: string;
}
interface Business {
	business_id: string;
	name: string;
	category: string;
	description: string;
	logo: Logo[];
}
