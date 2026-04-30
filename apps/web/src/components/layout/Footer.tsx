export function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bookstore
      </div>
    </footer>
  )
}