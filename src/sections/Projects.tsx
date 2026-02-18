import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Wrench, Cpu, Settings, Github } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ElementType;
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Industrial Automation',
    title: 'Automated Conveyor System',
    description:
      'Designed and implemented a PLC-controlled conveyor system with real-time sensor feedback, improving material handling efficiency and operational safety in industrial workflows.',
    image: '/images/project1-automation.jpg',
    technologies: ['PLC', 'Sensors', 'Pneumatics', 'HMI'],
    icon: Settings,
    live: '#',
    github: '#',
  },
  {
    id: 2,
    category: 'CAD Design',
    title: 'Mechanical Component Design',
    description:
      'Developed precision 3D mechanical components in SolidWorks with stress analysis and optimized material selection, improving structural reliability and manufacturability.',
    image: '/images/project2-cad.jpg',
    technologies: ['SolidWorks', 'AutoCAD', 'FEA', 'GD&T'],
    icon: Wrench,
    live: '#',
    github: '#',
  },
  {
    id: 3,
    category: 'IoT & Robotics',
    title: 'Smart Monitoring System',
    description:
      'Built an IoT monitoring system using Arduino and MQTT to track temperature, humidity, and vibration in real time, reducing manual inspection workload and improving equipment visibility.',
    image: '/images/project3-iot.jpg',
    technologies: ['Arduino', 'Python', 'MQTT', 'Node-RED'],
    icon: Cpu,
    live: '#',
    github: '#',
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <span
            className="text-sm font-medium text-blue-600 tracking-widest uppercase block mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s var(--ease-expo-out)',
            }}
          >
            Academic & Personal Projects
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold dark:text-white"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s var(--ease-expo-out) 0.1s',
            }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 0.8s var(--ease-expo-out) ${0.2 + index * 0.15}s`,
                }}
              >
                {/* IMAGE CARD */}
                <div
                  className={`interactive-lift relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* overlay */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-500" />

                  {/* number */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-bold text-blue-900 dark:text-blue-400">
                      0{project.id}
                    </span>
                  </div>

                  {/* icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''
                  }`}
                >
                  <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">
                    {project.category}
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-bold dark:text-white transition-transform duration-300 group-hover:translate-x-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
                    {project.description}
                  </p>

                  {/* tech */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 1 ? 'lg:justify-end' : ''
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 🔥 TRUST BUTTONS (NEW) */}
                  <div
                    className={`flex gap-4 pt-2 ${
                      index % 2 === 1 ? 'lg:justify-end' : ''
                    }`}
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 dark:text-blue-400 hover:underline"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                      <Github size={14} />
                    </a>
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group inline-flex items-center gap-2 text-blue-900 dark:text-blue-400 font-medium hover:gap-4 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all */}
        <div
          className="mt-24 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s var(--ease-expo-out) 0.8s',
          }}
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 font-medium rounded-full hover:bg-blue-900 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
          >
            View All Projects
            <ExternalLink
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
