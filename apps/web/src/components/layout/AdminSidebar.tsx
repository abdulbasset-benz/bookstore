import { Link } from "@tanstack/react-router"

export function AdminSidebar() {
  return (
    <aside className="w-64 border-r p-4 space-y-4">
      <h2 className="font-bold">Admin</h2>

      <nav className="flex flex-col gap-2">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/books">Books</Link>
        <Link to="/admin/orders">Orders</Link>
      </nav>
    </aside>
  )
}