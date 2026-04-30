import { BookCard } from "@/components/books/BookCard"

export function FeaturedBooks() {
  return (
    <section className="container mx-auto space-y-10">

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground uppercase">
          Grab Your Opportunity
        </p>

        <h2 className="text-3xl font-bold">
          Books With Offer
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard key={i} />
        ))}
      </div>

    </section>
  )
}