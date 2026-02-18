import { useEffect, useRef, useState } from 'react';
import { Twitter, Instagram, Linkedin, Github, ArrowUp, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#cta' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-blue-900 text-white overflow-hidden"
      style={{
        clipPath: isVisible ? 'inset(0)' : 'inset(100% 0 0 0)',
        transition: 'clip-path 0.8s var(--ease-expo-out)',
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="inline-block text-2xl font-bold tracking-wider"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.3s',
              }}
            >
              PORTFOLIO.
            </a>
            <p
              className="text-blue-200 max-w-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s var(--ease-expo-out) 0.4s',
              }}
            >
              Mechatronics & Industrial Engineering student at CUET. 
              Passionate about automation, robotics, and industrial systems.
            </p>

            {/* Social Links */}
            <div
              className="flex items-center gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.4s ease 0.5s',
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => e.preventDefault()}
                  className="group w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300"
                  aria-label={social.label}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: `all 0.4s var(--ease-elastic) ${0.5 + index * 0.08}s`,
                  }}
                >
                  <social.icon
                    size={18}
                    className="text-blue-200 group-hover:text-blue-900 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div
            className="lg:justify-self-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.4s var(--ease-expo-out) 0.7s',
            }}
          >
            <h4 className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                    transition: `all 0.4s var(--ease-expo-out) ${0.7 + index * 0.05}s`,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-blue-200 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div
            className="lg:justify-self-end"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.4s var(--ease-expo-out) 0.9s',
            }}
          >
            <h4 className="text-sm font-medium text-blue-300 uppercase tracking-wider mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3 text-blue-200">
              <p>
                <a href="mailto:nowshinnowyalnirjhor@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} />
                  <span>nowshinnowyalnirjhor@gmail.com</span>
                </a>
              </p>
              <p className="text-sm">
                Chittagong University of Engineering & Technology
                <br />
                Chittagong, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p
              className="text-sm text-blue-300 flex items-center gap-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.4s ease 1s',
              }}
            >
              © 2024 Portfolio. Made with
              <Heart size={14} className="text-red-400 fill-red-400" />
              All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.4s ease 1.1s',
              }}
            >
              Back to top
              <span className="w-8 h-8 rounded-full border border-blue-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <ArrowUp
                  size={14}
                  className="group-hover:text-blue-900 transition-colors"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
