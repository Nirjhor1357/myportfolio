import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      const contentElements =
        heroRef.current.querySelectorAll('.parallax-content');

      contentElements.forEach((el) => {
        (el as HTMLElement).style.transform = `translateY(${
          -progress * 80
        }px)`;
        (el as HTMLElement).style.opacity = `${1 - progress * 1.5}`;
      });

      imageRef.current.style.transform = `translateY(${
        progress * 60
      }px) scale(${1 + progress * 0.1})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    document.querySelector('#cta')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const renderAnimatedText = (text: string, baseDelay = 0) =>
    text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded
            ? 'translateY(0) rotateX(0deg)'
            : 'translateY(50px) rotateX(90deg)',
          transition: `all 0.6s var(--ease-expo-out) ${
            baseDelay + index * 0.05
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
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-20 left-10 h-32 w-32 rounded-full border border-gray-200 opacity-50 dark:border-gray-700"
          style={{
            transform: isLoaded
              ? 'scale(1) rotate(0deg)'
              : 'scale(0) rotate(-45deg)',
            transition: 'all 1s var(--ease-expo-out) 0.2s',
          }}
        />
        <div
          className="absolute bottom-40 left-20 h-20 w-20 rounded-lg bg-blue-50 opacity-60 dark:bg-blue-900/20"
          style={{
            transform: isLoaded ? 'scale(1)' : 'scale(0)',
            transition: 'all 1s var(--ease-expo-out) 0.4s',
          }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-4 w-4 rounded-full bg-blue-600 opacity-20"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT */}
            <div className="order-2 space-y-8 lg:order-1">
              {/* Label */}
              <div className="parallax-content">
                <p
                  className="text-sm font-medium uppercase tracking-widest text-blue-600"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded
                      ? 'translateY(0)'
                      : 'translateY(20px)',
                    transition: 'all 0.6s var(--ease-expo-out) 0.3s',
                  }}
                >
                  Mechatronics Engineer & Full-Stack Developer
                </p>
              </div>

              {/* Heading */}
              <h1
                className="text-5xl font-bold leading-tight dark:text-white md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  perspective: '1000px',
                }}
              >
                <span className="block parallax-content">
                  {renderAnimatedText('NIRJHOR', 0.5)}
                </span>

                <span
                  className="parallax-content mt-2 block text-blue-900 dark:text-blue-400"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded
                      ? 'translateY(0)'
                      : 'translateY(40px)',
                    transition: 'all 0.8s var(--ease-expo-out) 0.8s',
                  }}
                >
                  Mechatronics Engineer & Web Developer
                </span>
              </h1>

              {/* Value Statement */}
              <p
                className="parallax-content text-xl font-light text-gray-600 dark:text-gray-300 md:text-2xl"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  filter: isLoaded ? 'blur(0)' : 'blur(20px)',
                  transition: 'all 0.8s var(--ease-smooth) 1s',
                }}
              >
                I build high-performance web applications and intelligent
                automation systems that solve real-world engineering problems.
              </p>

              {/* Description */}
              <p
                className="parallax-content max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded
                    ? 'translateY(0)'
                    : 'translateY(30px)',
                  transition: 'all 0.6s var(--ease-expo-out) 1.2s',
                }}
              >
                Focused on building fast, scalable systems that bridge
                mechanical engineering with modern software. I design solutions
                that are practical, efficient, and production-ready.
              </p>

              {/* Trust Strip */}
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>⚡ Performance focused</span>
                <span>🤖 Automation driven</span>
                <span>🧠 Engineering mindset</span>
              </div>

              {/* CTA */}
              <div
                className="parallax-content flex flex-wrap gap-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.7s var(--ease-elastic) 1.4s',
                }}
              >
                <button
                  onClick={scrollToProjects}
                  className="group interactive-lift inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-800 hover:shadow-2xl"
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

              {/* Socials */}
              <div
                className="parallax-content flex items-center gap-4 pt-2"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.6s ease 1.6s',
                }}
              >
                {[
                  {
                    href: 'mailto:nowshinnowyalnirjhor@gmail.com',
                    Icon: Mail,
                  },
                  {
                    href: 'https://www.linkedin.com/in/nowshin-nirjhor/',
                    Icon: Linkedin,
                  },
                  {
                    href: 'https://github.com/Nirjhor1357',
                    Icon: Github,
                  },
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
              <div
                ref={imageRef}
                className="relative"
                style={{
                  clipPath: isLoaded ? 'inset(0)' : 'inset(100% 0 0 0)',
                  transition: 'clip-path 1.2s var(--ease-expo-out) 0.8s',
                }}
              >
                <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-2xl lg:max-w-none">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Nowshin Nowyal Nirjhor"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{
                      transform: isLoaded ? 'scale(1)' : 'scale(1.2)',
                      transition:
                        'transform 1.5s var(--ease-smooth) 0.8s',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
