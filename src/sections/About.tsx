import { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageRotation = (scrollProgress - 0.5) * 10;

  const education = {
    university: "Chittagong University of Engineering & Technology",
    degree: "B.Sc. in Mechatronics & Industrial Engineering",
    location: "Chittagong, Bangladesh",
    period: "2021 - Present",
  };

  const achievements = [
    "Dean's List - Academic Excellence",
    "Robotics Club Member",
    "Industrial Automation Workshop Participant",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div
            ref={imageRef}
            className="relative"
            style={{ perspective: '1500px' }}
          >
            <div
              className="relative"
              style={{
                transform: `rotateY(${imageRotation}deg)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Main Image */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0) rotateY(0deg)' : 'translateX(-100px) rotateY(-30deg)',
                  transition: 'all 1s var(--ease-expo-out) 0.3s',
                }}
              >
                <img
                  src="/images/about-portrait.jpg"
                  alt="About Me"
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Frame */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-900 rounded-2xl -z-10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate(0, 0)' : 'translate(20px, 20px)',
                  transition: 'all 0.8s var(--ease-expo-out) 0.6s',
                }}
              />

              {/* Achievement Badge */}
              <div
                className="absolute -top-4 -left-4 bg-blue-900 text-white rounded-xl p-4 shadow-xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.6s var(--ease-elastic) 0.8s',
                }}
              >
                <Award className="w-6 h-6 mb-1" />
                <p className="text-xs opacity-80">Engineering</p>
                <p className="text-lg font-bold">Student</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            {/* Section Label */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s var(--ease-expo-out) 0.1s',
              }}
            >
              <span className="text-sm font-medium text-blue-600 tracking-widest uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s var(--ease-expo-out) 0.2s',
              }}
            >
              Engineering the
              <br />
              <span className="text-blue-900">Future</span>
            </h2>

            {/* Description */}
            <div
              className="space-y-4 text-gray-600 leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s var(--ease-expo-out) 0.4s',
              }}
            >
              <p>
                As a Mechatronics and Industrial Engineering student at CUET, I am passionate 
                about combining mechanical systems with electronics and intelligent control. 
                My academic journey has equipped me with a strong foundation in automation, 
                robotics, and industrial processes.
              </p>
              <p>
                I believe in the power of interdisciplinary engineering to solve complex 
                real-world problems. From designing automated systems to optimizing industrial 
                workflows, I am constantly exploring new technologies and methodologies.
              </p>
            </div>

            {/* Education Card */}
            <div
              className="bg-gray-50 rounded-2xl p-6 space-y-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s var(--ease-expo-out) 0.5s',
              }}
            >
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-900" />
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">{education.degree}</p>
                <p className="text-blue-900 font-medium">{education.university}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div
              className="space-y-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s var(--ease-expo-out) 0.6s',
              }}
            >
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-900 text-sm font-medium rounded-full"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Tags */}
            <div
              className="flex flex-wrap gap-3 pt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s var(--ease-expo-out) 0.8s',
              }}
            >
              {['PLC Programming', 'CAD/CAM', 'Robotics', 'IoT', 'Automation'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
