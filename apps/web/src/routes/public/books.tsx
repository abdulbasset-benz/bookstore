import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/public/books")({
  component: ShopPage,
});

function ShopPage() {
  return <div>Shop</div>;
}