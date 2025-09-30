import { createFileRoute } from "@tanstack/solid-router";
import { Dashboard } from "@/features/dashboard/dashboard";

export const Route = createFileRoute("/")({
	component: Dashboard,
});
