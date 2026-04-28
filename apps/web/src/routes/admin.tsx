import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex">
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}