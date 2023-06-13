import React from 'react';
import ThemeChanger from './ThemeChanger';

describe('<ThemeChanger />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<ThemeChanger />);
	});
});
