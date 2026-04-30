import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/public/books/$slug")({
  component: BookPage,
});

function BookPage() {
  const { slug } = Route.useParams();

  return <div>{slug}</div>;
}
