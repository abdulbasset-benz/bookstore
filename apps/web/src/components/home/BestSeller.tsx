export function BestSeller() {
  return (
    <section className="container mx-auto grid grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div className="flex justify-center">
        <img
        alt=""
          src="/placeholder-book.png"
          className="w-75 rounded-lg shadow"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          By Author Name
        </p>

        <h2 className="text-3xl font-bold">
          Best Selling Book
        </h2>

        <p className="text-muted-foreground">
          Short description of the book goes here.
        </p>

        <p className="text-xl font-semibold">
          $45.00
        </p>

        <button className="underline">
          Shop it now →
        </button>
      </div>

    </section>
  )
}