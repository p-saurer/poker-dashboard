describe("Dashboard", () => {
	it("show an overview of last games and top 3 players", () => {
		cy.visit("/");

		cy.getByTestId("dashboard").contains("Hello from Dashboard");
	});
});
