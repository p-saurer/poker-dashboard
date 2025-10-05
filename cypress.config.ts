import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000/",
		specPattern: [
			"src/**/__tests__/*.test.integration.ts",
			"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
		],
		setupNodeEvents(_on, _config) {
			// implement node event listeners here
		},
	},
});
