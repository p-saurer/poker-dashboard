import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	plugins: [tanstackRouter({ target: "solid" }), solid(), tailwindcss()],
});
