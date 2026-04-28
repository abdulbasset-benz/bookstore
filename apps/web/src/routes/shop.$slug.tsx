import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop/$slug")({
  component: BookPage,
});

function BookPage() {
  const { slug } = Route.useParams();

  return <div>{slug}</div>;
}