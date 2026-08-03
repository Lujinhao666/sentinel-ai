import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contacts", href: "#contacts" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16 py-5">
      <a
        href="#"
        className="text-foreground text-xl font-semibold tracking-tight"
      >
        SENTINEL
      </a>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
      >
        Get Quote
      </Button>
    </nav>
  )
}