import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          BOOKSAW
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
        </nav>

        <Button size="sm">Cart</Button>
      </div>
    </header>
  );
}
