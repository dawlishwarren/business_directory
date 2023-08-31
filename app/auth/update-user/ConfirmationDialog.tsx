import { MutableRefObject, forwardRef } from 'react';

const ConfirmationDialog = forwardRef(
	({
		props: { children },
		ref,
	}: {
		props: { children: React.ReactNode };
		ref: MutableRefObject<any>;
	}) => {
		return (
			<dialog
				ref={ref}
				style={{ zIndex: 10, display: 'flex', alignItems: 'center' }}>
				{children}
			</dialog>
		);
	}
);

export default ConfirmationDialog;
