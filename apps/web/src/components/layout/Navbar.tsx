import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/public" className="font-bold text-lg">
          Bookstore
        </Link>

        <nav className="flex gap-6">
          <Link to="/public/books">Shop</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        <Button>Cart</Button>
      </div>
    </header>
  );
}
