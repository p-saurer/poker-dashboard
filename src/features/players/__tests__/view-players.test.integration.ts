describe("Players", () => {
	it("shows a list of all players", () => {
		cy.visit("/players");

		cy.getByTestId("player-list").contains("Hello from PlayerList");
	});
});
