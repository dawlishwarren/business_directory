import React from 'react';
import EmailForm from './EmailForm';

describe('<EmailForm />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<EmailForm />);
	});
});
