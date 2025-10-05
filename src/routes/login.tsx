import { createFileRoute } from "@tanstack/solid-router";
import { Login } from "@/features/auth/login";

export const Route = createFileRoute("/login")({
	component: Login,
});
