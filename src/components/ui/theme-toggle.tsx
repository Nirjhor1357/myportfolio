import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme")

    if (saved) {
      setTheme(saved)
      document.documentElement.classList.toggle("dark", saved === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"

    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted transition"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}