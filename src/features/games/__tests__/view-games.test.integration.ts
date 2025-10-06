describe("Games", () => {
	it("shows a list of all games, sorted by most recent date", () => {
		cy.visit("/games");

		cy.getByTestId("game-list").contains("Hello from GameList");
	});
});
