import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectDetail {
  title: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  challenges: string;
  outcome: string;
  github?: string;
  live?: string;
}

const projectData: Record<string, ProjectDetail> = {
  "task-manager-pro": {
    title: "Task Manager Pro",
    description:
      "A drag-and-drop productivity application designed for efficient task organization and prioritization.",
    tech: ["React", "TypeScript", "Tailwind", "dnd-kit", "Framer Motion"],
    problem:
      "Many productivity tools are cluttered and complicated, making task management inefficient.",
    solution:
      "Built a modern task management system with drag-and-drop prioritization, inline editing, and filtering features.",
    challenges:
      "Handling complex drag interactions while maintaining smooth UI performance.",
    outcome:
      "A responsive productivity interface with modular components and a clean user experience.",
    github: "https://github.com/Nirjhor1357/TaskManagerPro",
    live: "https://nowshinnirjhor.me/taskmanager",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projectData[slug ?? ""];

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-10 text-blue-600 hover:underline"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <p className="text-foreground-600 dark:text-foreground-300 mb-10">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-2">Problem</h2>
          <p className="text-foreground-600 dark:text-foreground-300">{project.problem}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Solution</h2>
          <p className="text-foreground-600 dark:text-foreground-300">{project.solution}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
          <p className="text-foreground-600 dark:text-foreground-300">{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
          <p className="text-foreground-600 dark:text-foreground-300">{project.outcome}</p>
        </div>

      </div>

      {/* Links */}
      <div className="flex gap-6 mt-12">

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            Live Demo
            <ExternalLink size={16} />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            GitHub
            <Github size={16} />
          </a>
        )}

      </div>
    </section>
  );
}