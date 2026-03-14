import { motion } from "framer-motion";

const skills = {
  Languages: ["C++", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React", "TailwindCSS", "Vite"],
  Backend: ["Node.js", "REST APIs"],
  Tools: ["Git", "Vercel", "Figma"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-foreground-700 dark:text-foreground-300">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}