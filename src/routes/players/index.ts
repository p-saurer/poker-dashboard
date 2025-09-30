import { createFileRoute } from "@tanstack/solid-router";
import { PlayerList } from "@/features/players/player-list";

export const Route = createFileRoute("/players/")({
	// loader: fetchPlayers,
	component: PlayerList,
});
