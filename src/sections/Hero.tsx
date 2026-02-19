import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // ✅ initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ optimized parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      const content = heroRef.current.querySelectorAll('.parallax-content');

      content.forEach((el) => {
        const element = el as HTMLElement;
        element.style.transform = `translateY(${-progress * 50}px)`;
        element.style.opacity = `${1 - progress * 1.1}`;
      });

      imageRef.current.style.transform = `translateY(${progress * 40}px) scale(${1 + progress * 0.05})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ smooth cursor glow (throttled)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () =>
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* 🌈 DEPTH BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

        {/* ✅ PREMIUM NOISE (properly visible) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/noise.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px',
            opacity: 0.08,
            mixBlendMode: 'soft-light',
          }}
        />
      </div>

      {/* 🔥 CURSOR GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: `radial-gradient(
            520px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.16),
            rgba(59,130,246,0.08) 30%,
            rgba(59,130,246,0.03) 55%,
            transparent 72%
          )`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT */}
            <div className="order-2 space-y-8 lg:order-1">
              <p className="parallax-content text-sm font-medium uppercase tracking-widest text-blue-600">
                Mechatronics Engineer & Full-Stack Developer
              </p>

              {/* ✅ FIXED NAME (desktop + mobile perfect) */}
              <h1
                className="font-bold leading-[0.95] tracking-[-0.02em] text-[42px] sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="parallax-content block whitespace-nowrap hidden sm:block">
                  NOWSHIN NOWYAL NIRJHOR
                </span>

                <span className="parallax-content block sm:hidden">
                  NOWSHIN NOWYAL<br />
                  NIRJHOR
                </span>

                <span className="parallax-content mt-3 block text-blue-900 dark:text-blue-400">
                  Mechatronics Engineer & Web Developer
                </span>
              </h1>

              <p className="parallax-content text-lg sm:text-xl font-light text-gray-600 dark:text-gray-300 max-w-xl">
                I build high-performance web applications and intelligent
                automation systems that premium teams actually ship.
              </p>

              {/* CTA */}
              <div className="parallax-content flex flex-wrap gap-4">
                <button
                  onClick={scrollToProjects}
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-800 hover:shadow-2xl"
                >
                  View My Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-blue-900 px-8 py-4 font-medium text-blue-900 transition-all duration-300 hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500"
                >
                  Hire Me
                </button>
              </div>

              {/* SOCIAL */}
              <div className="parallax-content flex items-center gap-4 pt-2">
                {[
                  { href: 'mailto:nowshinnowyalnirjhor@gmail.com', Icon: Mail },
                  { href: 'https://www.linkedin.com/in/nowshin-nirjhor/', Icon: Linkedin },
                  { href: 'https://github.com/Nirjhor1357', Icon: Github },
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-100 transition-all duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative order-1 lg:order-2">
              <div ref={imageRef} className="relative">
                <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] lg:max-w-none">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Nowshin Nowyal Nirjhor"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
