import { createFileRoute } from "@tanstack/react-router";
import { BookCard } from "@/components/books/BookCard";

export const Route = createFileRoute("/public/books")({
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="container mx-auto py-10 grid grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <BookCard key={i} />
      ))}
    </div>
  );
}
