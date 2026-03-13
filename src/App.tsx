import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import SectionDivider from "./components/ui/SectionDivider";
import Skills from "./sections/Skills";
import CurrentlyBuilding from "./sections/CurrentlyBuilding";
import CaseStudies from "./sections/CaseStudies";
import GithubActivity from "./sections/GithubActivity";
import GithubStats from "./sections/GithubStats";
import ProjectDetails from "./pages/ProjectDetails";
import Philosophy from "./sections/Philosophy";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={mainRef}
      className="relative bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Navigation */}
      <Navigation scrollY={scrollY} />

      {/* Main Content */}
      <main className="relative space-y-6 lg:space-y-10">

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
  );
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;