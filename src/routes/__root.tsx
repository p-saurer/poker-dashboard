import { createRootRoute, Link, Outlet } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { Navbar } from "@/ui/navbar";

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => {
		return (
			<div>
				<p>This is the notFoundComponent configured on root route</p>
				<Link to="/">Start Over</Link>
			</div>
		);
	},
});

function RootComponent() {
	return (
		<>
			<Navbar />
			<hr />
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
