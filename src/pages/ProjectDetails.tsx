import { useParams } from "react-router-dom";

const projectData: any = {
  "task-manager-pro": {
    title: "Task Manager Pro",
    description:
      "A drag-and-drop productivity app built with React, TypeScript, and dnd-kit.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    problem:
      "Many productivity tools are overly complex or cluttered, reducing usability.",
    solution:
      "Built a clean task management system with drag-and-drop prioritization and smooth animations.",
    challenges:
      "Implementing stable drag interactions while maintaining UI performance.",
    outcome:
      "A smooth productivity interface with modular components and modern UI design.",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projectData[slug as keyof typeof projectData];

  if (!project) return <div className="p-20">Project not found</div>;

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {project.description}
      </p>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold mb-2">Problem</h2>
          <p>{project.problem}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Solution</h2>
          <p>{project.solution}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
          <p>{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
          <p>{project.outcome}</p>
        </div>

      </div>
    </section>
  );
}