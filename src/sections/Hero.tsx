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

  // ✅ parallax (smooth)
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      const content =
        heroRef.current.querySelectorAll('.parallax-content');

      content.forEach((el) => {
        (el as HTMLElement).style.transform = `translateY(${-progress * 60
          }px)`;
        (el as HTMLElement).style.opacity = `${1 - progress * 1.2}`;
      });

      imageRef.current.style.transform = `translateY(${progress * 50
        }px) scale(${1 + progress * 0.06})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ smooth cursor glow
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
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
    });

  const scrollToContact = () =>
    document.querySelector('#cta')?.scrollIntoView({
      behavior: 'smooth',
    });

  const renderAnimatedText = (text: string, baseDelay = 0) =>
    text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded
            ? 'translateY(0) rotateX(0deg)'
            : 'translateY(40px) rotateX(90deg)',
          transition: `all 0.6s var(--ease-expo-out) ${baseDelay + index * 0.045
            }s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

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

        {/* ✅ FIXED NOISE (subtle) */}
        {/* ✅ PREMIUM NOISE (VISIBLE BUT SUBTLE) */}
        {/* noise texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/noise.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.06,
            mixBlendMode: 'overlay',
          }}
        />

      </div>

      {/* 🔥 CURSOR GLOW (VISIBLE NOW) */}
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: `radial-gradient(
            550px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.18),
            rgba(59,130,246,0.10) 30%,
            rgba(59,130,246,0.04) 55%,
            transparent 70%
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

              <h1
                className="text-5xl font-bold leading-tight tracking-[-0.02em] dark:text-white md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="block parallax-content">
                  {renderAnimatedText('NOWSHIN NOWYAL NIRJHOR', 0.5)}
                </span>

                <span className="parallax-content mt-2 block text-blue-900 dark:text-blue-400">
                  Mechatronics Engineer & Web Developer
                </span>
              </h1>

              <p className="parallax-content text-xl font-light text-gray-600 dark:text-gray-300 md:text-2xl">
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
