import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto py-20 grid grid-cols-2 gap-10 items-center">
      
      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Life Of The Wild
        </h1>

        <p className="text-muted-foreground max-w-md">
          Discover books that inspire, educate, and entertain.
          Build your library with the best titles available.
        </p>

        <Button size="lg">
          Shop Now
        </Button>
      </div>

      <div className="flex justify-center">
        <img
        alt="img"
          src="/placeholder-book.png"
          className="w-75 rounded-lg shadow-lg"
        />
      </div>

    </section>
  )
}