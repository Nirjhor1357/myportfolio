import { useEffect, useRef, useState } from 'react';
import './App.css';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import SectionDivider from './components/ui/SectionDivider.tsx';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={mainRef}
      className="relative bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300"
    >
      {/* Navigation */}
      <Navigation scrollY={scrollY} />

      {/* Main Content */}
      <main className="relative space-y-6 lg:space-y-10">

        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider />

        <Projects />
        <SectionDivider />

        <Blog />
        <SectionDivider />

        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
