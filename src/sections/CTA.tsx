import { useEffect, useRef, useState } from "react"
import { Send, Sparkles, Mail, Phone, MapPin } from "lucide-react"

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const renderAnimatedText = (text: string, baseDelay = 0) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: `all 0.6s var(--ease-expo-out) ${baseDelay + index * 0.03}s`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-background overflow-hidden"
    >

      {/* Premium Glow Background */}
      <div className="absolute inset-0 pointer-events-none">

        {/* light glow */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.15),transparent_60%)]" />

        {/* dark glow */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.35),transparent_65%)] transition-opacity duration-700" />

      </div>

      {/* floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="absolute top-20 left-[10%] w-16 h-16 border border-border rounded-full"
          style={{
            opacity: isVisible ? 0.4 : 0,
            transform: isVisible
              ? "scale(1) rotate(0deg)"
              : "scale(0) rotate(-180deg)",
            transition: "all 1.2s var(--ease-expo-out) 0.4s",
            animation: isVisible ? "float 15s ease-in-out infinite" : "none",
          }}
        />

        <div
          className="absolute top-1/3 right-[15%] w-8 h-8 bg-primary rounded-lg"
          style={{
            opacity: isVisible ? 0.15 : 0,
            transform: isVisible ? "scale(1)" : "scale(0)",
            transition: "all 1s var(--ease-expo-out) 0.6s",
            animation: isVisible ? "float 12s ease-in-out infinite 1s" : "none",
          }}
        />

        <div
          className="absolute bottom-32 left-[20%] w-12 h-12 border-2 border-border rotate-45"
          style={{
            opacity: isVisible ? 0.3 : 0,
            transform: isVisible
              ? "scale(1) rotate(45deg)"
              : "scale(0) rotate(0deg)",
            transition: "all 1.2s var(--ease-expo-out) 0.5s",
            animation: isVisible ? "float 10s ease-in-out infinite 0.5s" : "none",
          }}
        />

      </div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl mb-8 shadow-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0)",
            transition: "all 0.7s var(--ease-elastic) 0.2s",
          }}
        >
          <Sparkles size={28} />
        </div>

        {/* heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {renderAnimatedText("Let's Build Something", 0.3)}
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {renderAnimatedText("Amazing Together", 0.6)}
          </span>
        </h2>

        {/* subtitle */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? "blur(0)" : "blur(15px)",
            transition: "all 0.8s var(--ease-smooth) 0.8s",
          }}
        >
          I'm always excited to collaborate on interesting projects,
          internships, or research opportunities. Let's connect!
        </p>

        {/* contact chips */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s var(--ease-expo-out) 0.9s",
          }}
        >

          <a
            href="mailto:nowshinnowyalnirjhor@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border backdrop-blur-sm hover:border-primary transition"
          >
            <Mail size={16} />
            <span className="text-sm">Email</span>
          </a>

          <a
            href="tel:+8801306445939"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border backdrop-blur-sm hover:border-primary transition"
          >
            <Phone size={16} />
            <span className="text-sm">Call</span>
          </a>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border backdrop-blur-sm">
            <MapPin size={16} />
            <span className="text-sm">Bangladesh</span>
          </div>

        </div>

        {/* buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "all 0.7s var(--ease-elastic) 1s",
          }}
        >

          <a
            href="mailto:nowshinnowyalnirjhor@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Send Message
            <Send
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-accent transition-all duration-300"
          >
            Download Resume
          </a>

        </div>

        {/* skills */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s var(--ease-expo-out) 1.2s",
          }}
        >
          {["PLC Programming","CAD Design","Robotics","IoT","Automation","Python"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-card border border-border text-sm rounded-full text-muted-foreground hover:text-foreground hover:border-primary transition"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CTA