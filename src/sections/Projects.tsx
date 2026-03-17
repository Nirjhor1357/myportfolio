import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Wrench,
  Cpu,
  Settings,
  Github,
} from "lucide-react";

interface Project {
  id: number;
  slug: string;
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
    id: 0,
    slug: "task-manager-pro",
    category: "Web Development",
    title: "Task Manager Pro",
    description:
      "A premium drag-and-drop task management application built with React, TypeScript, and dnd-kit. Features include task filtering, inline editing, priority management, and smooth animations for a modern productivity experience.",
    image: "/images/project-taskmanager.webp",
    technologies: ["React", "TypeScript", "Tailwind", "dnd-kit", "Framer Motion"],
    icon: Cpu,
    live: "https://nowshinnirjhor.me/taskmanager",
    github: "https://github.com/Nirjhor1357/TaskManagerPro",
  },
  {
  id: 1,
  slug: "ai-study-plan-generator",
  category: "AI Web Application",
  title: "AI Study Plan Generator",
  description:
    "An AI-powered study planning tool that generates optimized study schedules with analytics dashboards and downloadable PDF reports. Built to help students organize their learning efficiently.",
  image: "/images/project-studyplanner.webp",
  technologies: ["React", "TypeScript", "Tailwind", "Recharts", "jsPDF"],
  icon: Cpu,
  live: "https://nowshinnirjhor.me/studyplangenerator",
  github: "https://github.com/Nirjhor1357/StudyPlanGenerator",
},
  {
    id: 2,
    slug: "automated-conveyor-system",
    category: "Industrial Automation",
    title: "Automated Conveyor System",
    description:
      "Designed and implemented a PLC-controlled conveyor system with real-time sensor feedback, improving material handling efficiency and operational safety.",
    image: "/images/project1-automation.webp",
    technologies: ["PLC", "Sensors", "Pneumatics", "HMI"],
    icon: Settings,
    live: "#",
    github: "https://github.com/Nirjhor1357",
  },
  {
    id: 3,
    slug: "mechanical-component-design",
    category: "CAD Design",
    title: "Mechanical Component Design",
    description:
      "Developed precision 3D mechanical components in SolidWorks with stress analysis and optimized material selection.",
    image: "/images/project2-cad.webp",
    technologies: ["SolidWorks", "AutoCAD", "FEA", "GD&T"],
    icon: Wrench,
    live: "#",
    github: "https://github.com/Nirjhor1357",
  },
  {
    id: 4,
    slug: "smart-monitoring-system",
    category: "IoT & Robotics",
    title: "Smart Monitoring System",
    description:
      "Built an IoT monitoring system using Arduino and MQTT to track temperature, humidity, and vibration in real time.",
    image: "/images/project3-iot.webp",
    technologies: ["Arduino", "Python", "MQTT", "Node-RED"],
    icon: Cpu,
    live: "#",
    github: "https://github.com/Nirjhor1357",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-20">
          <span
            className={`text-sm font-medium text-blue-600 tracking-widest uppercase block mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Academic & Personal Projects
          </span>

          <h2
            className={`text-4xl md:text-5xl font-bold dark:text-white transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Featured Projects
          </h2>
        </div>

        {/* PROJECTS */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-all duration-500" />

                  {/* NUMBER */}
                  <div className="absolute top-4 left-4 bg-background/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-bold text-blue-900 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-background dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                  </div>
                </motion.div>

                {/* CONTENT */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                    }`}
                >
                  <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">
                    {project.category}
                  </span>

                  <h3
                    className="text-3xl md:text-4xl font-bold dark:text-white transition-transform duration-300 group-hover:translate-x-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-foreground-600 dark:text-foreground-300 leading-relaxed max-w-md">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""
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

                  {/* LINKS */}
                  <div
                    className={`flex gap-4 pt-2 ${index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 dark:text-blue-400 hover:underline"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-900 dark:text-blue-400 hover:underline"
                      >
                        GitHub <Github size={14} />
                      </a>
                    )}
                  </div>

                  {/* DETAILS */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-blue-900 dark:text-blue-400 font-medium hover:gap-4 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* VIEW ALL */}
        <div
          className={`mt-24 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 font-medium rounded-full hover:bg-blue-900 hover:text-white dark:hover:bg-blue-500 transition-all duration-300">
            View All Projects
            <ExternalLink
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;