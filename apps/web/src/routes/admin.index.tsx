import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

function Dashboard() {
  return <div>Admin Dashboard</div>;
}