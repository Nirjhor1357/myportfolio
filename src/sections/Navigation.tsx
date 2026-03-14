import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "../components/ui/theme-toggle"

interface NavigationProps {
  scrollY: number
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#cta" },
  ]

  useEffect(() => {
    setIsVisible(scrollY > 80)
  }, [scrollY])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible
            ? "glass backdrop-blur-xl border-b border-border shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#hero")
              }}
              className="magnetic-hover text-xl font-bold tracking-wider text-foreground"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              PORTFOLIO.
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="underline-animate text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex items-center gap-4">

              {/* DARK MODE TOGGLE */}
              <ThemeToggle />

              {/* CTA */}
              <a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#cta")
                }}
                className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">

          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
              style={{
                fontFamily: "Montserrat, sans-serif",
                animationDelay: `${index * 0.1}s`,
                animation: isMenuOpen
                  ? "slideUp 0.5s var(--ease-expo-out) forwards"
                  : "none",
              }}
            >
              {item.label}
            </a>
          ))}

          {/* MOBILE DARK MODE */}
          <ThemeToggle />

          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#cta")
            }}
            className="mt-8 px-8 py-3 bg-primary text-primary-foreground text-lg font-medium rounded-full hover:opacity-90 transition-all duration-300"
          >
            Let's Talk
          </a>

        </div>
      </div>
    </>
  )
}

export default Navigation