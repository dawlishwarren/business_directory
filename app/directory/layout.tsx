import { ReactNode } from 'react';
import { Suspense } from 'react';
import Loading from './business/loading';

export default function Layout({ children }: { children: ReactNode }) {
	return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
