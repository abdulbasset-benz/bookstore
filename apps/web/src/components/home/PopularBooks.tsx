import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { BookCard } from "@/components/books/BookCard"

export function PopularBooks() {
  return (
    <section className="container mx-auto space-y-10">

      <div className="text-center space-y-2">
        <p className="text-sm uppercase text-muted-foreground">
          Some quality items
        </p>
        <h2 className="text-3xl font-bold">
          Popular Books
        </h2>
      </div>

      <Tabs defaultValue="all" className="space-y-6">

        <TabsList className="flex justify-center gap-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="tech">Technology</TabsTrigger>
          <TabsTrigger value="romantic">Romantic</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Grid />
        </TabsContent>

        <TabsContent value="business">
          <Grid />
        </TabsContent>

        <TabsContent value="tech">
          <Grid />
        </TabsContent>

      </Tabs>

    </section>
  )
}

function Grid() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <BookCard key={i} />
      ))}
    </div>
  )
}