import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_layout")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">Admin Sidebar</aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
