import { BookCard } from "@/components/books/BookCard"

export function OfferSection() {
  return (
    <section className="container mx-auto space-y-10">

      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-sm uppercase text-muted-foreground">
          Grab your opportunity
        </p>
        <h2 className="text-3xl font-bold">
          Books With Offer
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard key={i} />
        ))}
      </div>

    </section>
  )
}