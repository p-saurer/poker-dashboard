describe("Login", () => {
	it("shows the login form to sign in an existing user", () => {
		cy.visit("/login");

		cy.getByTestId("login").contains("Hello from Login");
	});
});
