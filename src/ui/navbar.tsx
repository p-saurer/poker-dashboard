import { Link } from "@tanstack/solid-router";

export function Navbar() {
	return (
		<div class="p-2 flex gap-2 text-lg border-b">
			<Link
				to="/"
				activeProps={{
					class: "font-bold",
				}}
				activeOptions={{ exact: true }}
			>
				Home
			</Link>{" "}
			<Link
				to="/players"
				activeProps={{
					class: "font-bold",
				}}
				activeOptions={{ exact: true }}
			>
				Players
			</Link>{" "}
			<Link
				to="/games"
				activeProps={{
					class: "font-bold",
				}}
				activeOptions={{ exact: true }}
			>
				Games
			</Link>{" "}
			<Link
				// @ts-expect-error
				to="/this-route-does-not-exist"
				activeProps={{
					class: "font-bold",
				}}
			>
				This Route Does Not Exist
			</Link>
		</div>
	);
}
