import { useEffect, useRef, useState, lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import "./App.css"

/* Sections */
import Navigation from "./sections/Navigation"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Blog from "./sections/Blog"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"
import CurrentlyBuilding from "./sections/CurrentlyBuilding"
import CaseStudies from "./sections/CaseStudies"
import GithubActivity from "./sections/GithubActivity"
import GithubStats from "./sections/GithubStats"
import Philosophy from "./sections/Philosophy"

/* UI */
import SectionDivider from "./components/ui/SectionDivider"

/* Lazy page */
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"))

/* ============================
   HOME PAGE
============================ */

function Home() {
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      ref={mainRef}
      className="relative min-h-screen bg-background text-foreground transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Navigation */}
      <Navigation scrollY={scrollY} />

      {/* Main Content */}
      <main className="relative space-y-8 lg:space-y-12">

        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider />

        <Skills />
        <SectionDivider />

        <Projects />
        <SectionDivider />

        <GithubActivity />
        <SectionDivider />

        <GithubStats />
        <SectionDivider />

        <CaseStudies />
        <SectionDivider />

        <CurrentlyBuilding />
        <SectionDivider />

        <Philosophy />
        <SectionDivider />

        <Blog />
        <SectionDivider />

        <CTA />

      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}

/* ============================
   APP ROUTER
============================ */

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-muted-foreground">
            Loading...
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default App