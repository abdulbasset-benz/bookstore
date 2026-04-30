import { createFileRoute } from '@tanstack/react-router'
// routes/(admin)/login.tsx
export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  return <div>Login</div>;
}