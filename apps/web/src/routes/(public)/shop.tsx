import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/shop")({
  component: ShopPage,
});

function ShopPage() {
  return <div>Shop</div>;
}