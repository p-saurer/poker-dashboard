import { createFileRoute } from "@tanstack/solid-router";
import { GameList } from "@/features/games/game-list";

export const Route = createFileRoute("/games/")({
	// loader: fetchGames,
	component: GameList,
});
