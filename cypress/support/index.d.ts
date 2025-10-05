/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<_Subject> {
		getByTestId(testId: string): Chainable<HTMLElement>;
	}
}
