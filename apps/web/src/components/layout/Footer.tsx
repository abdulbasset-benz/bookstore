export function Footer() {
  return (
    <footer className="border-t mt-20 py-16">
      <div className="container mx-auto grid grid-cols-5 gap-10">

        {/* Logo */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">BOOKSAW</h2>
          <p className="text-sm text-muted-foreground">
            Simple bookstore platform.
          </p>
        </div>

        {/* Columns */}
        <FooterCol title="About">
          <a>Vision</a>
          <a>Articles</a>
          <a>Careers</a>
        </FooterCol>

        <FooterCol title="Discover">
          <a>Home</a>
          <a>Books</a>
          <a>Authors</a>
        </FooterCol>

        <FooterCol title="My Account">
          <a>Login</a>
          <a>Cart</a>
        </FooterCol>

        <FooterCol title="Help">
          <a>Support</a>
          <a>Contact</a>
        </FooterCol>

      </div>
    </footer>
  )
}

type FooterColProps = {
  title: string
  children: React.ReactNode
}

function FooterCol({ title, children }: FooterColProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold">{title}</h4>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        {children}
      </div>
    </div>
  )
}