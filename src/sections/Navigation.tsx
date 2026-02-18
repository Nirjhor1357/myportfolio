import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#cta' },
  ];

  useEffect(() => {
    setIsVisible(scrollY > 100);
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible
            ? 'glass shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s var(--ease-expo-out), background 0.4s ease, padding 0.4s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="magnetic-hover text-xl font-bold tracking-wider text-blue-900"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              PORTFOLIO.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="underline-animate text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#cta');
              }}
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-blue-900 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                animationDelay: `${index * 0.1}s`,
                animation: isMenuOpen ? 'slideUp 0.5s var(--ease-expo-out) forwards' : 'none',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#cta');
            }}
            className="mt-8 px-8 py-3 bg-blue-900 text-white text-lg font-medium rounded-full hover:bg-blue-800 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
