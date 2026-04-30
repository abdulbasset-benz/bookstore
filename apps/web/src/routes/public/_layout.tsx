import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/public/_layout")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div>
      <header className="border-b p-4">Navbar</header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer className="border-t p-4">Footer</footer>
    </div>
  );
}