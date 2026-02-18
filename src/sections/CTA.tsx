import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderAnimatedText = (text: string, baseDelay: number = 0) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: `all 0.6s var(--ease-expo-out) ${baseDelay + index * 0.03}s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-gray-50 overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 58, 138, 0.05) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 1s var(--ease-expo-out)',
        }}
      />

      {/* Decorative Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-[10%] w-16 h-16 border border-blue-200 rounded-full"
          style={{
            opacity: isVisible ? 0.5 : 0,
            transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
            transition: 'all 1.2s var(--ease-expo-out) 0.4s',
            animation: isVisible ? 'float 15s ease-in-out infinite' : 'none',
          }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-8 h-8 bg-blue-900 rounded-lg"
          style={{
            opacity: isVisible ? 0.1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: 'all 1s var(--ease-expo-out) 0.6s',
            animation: isVisible ? 'float 12s ease-in-out infinite 1s' : 'none',
          }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-12 h-12 border-2 border-blue-300 rotate-45"
          style={{
            opacity: isVisible ? 0.3 : 0,
            transform: isVisible ? 'scale(1) rotate(45deg)' : 'scale(0) rotate(0deg)',
            transition: 'all 1.2s var(--ease-expo-out) 0.5s',
            animation: isVisible ? 'float 10s ease-in-out infinite 0.5s' : 'none',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Sparkle Icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-2xl mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: 'all 0.7s var(--ease-elastic) 0.2s',
          }}
        >
          <Sparkles className="text-white" size={28} />
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {renderAnimatedText("Let's Build Something", 0.3)}
          <br />
          <span className="text-blue-900">
            {renderAnimatedText("Amazing Together", 0.6)}
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0)' : 'blur(15px)',
            transition: 'all 0.8s var(--ease-smooth) 0.8s',
          }}
        >
          I'm always excited to collaborate on interesting projects, 
          internships, or research opportunities. Let's connect!
        </p>

        {/* Contact Info */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s var(--ease-expo-out) 0.9s',
          }}
        >
          <a href="mailto:nowshinnowyalnirjhor@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-900 transition-colors">
            <Mail size={18} />
            <span>nowshinnowyalnirjhor@gmail.com</span>
          </a>
          <a href="tel:+8801XXXXXXXXX" className="flex items-center gap-2 text-gray-600 hover:text-blue-900 transition-colors">
            <Phone size={18} />
            <span>+880 130-6445939</span>
          </a>
          <span className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} />
            <span>Chittagong, Bangladesh</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.7s var(--ease-elastic) 1s',
          }}
        >
          <a
            href="mailto:nowshinnowyalnirjhor@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow"
          >
            Send Message
            <Send
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-900 text-blue-900 font-medium rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300"
            onClick={(e) => e.preventDefault()}
          >
            Download Resume
          </a>
        </div>

        {/* Skills Highlight */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s var(--ease-expo-out) 1.2s',
          }}
        >
          {['PLC Programming', 'CAD Design', 'Robotics', 'IoT', 'Automation', 'Python'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
