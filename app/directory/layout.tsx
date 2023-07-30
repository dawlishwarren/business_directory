// Packages/Dependencies
import { ReactNode } from 'react';
import { Suspense } from 'react';
// Components
import Loading from './loading';

export default function Layout({ children }: { children: ReactNode }) {
	return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
