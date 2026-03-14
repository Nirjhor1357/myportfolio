import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Study Planner",
    desc: "Smart study scheduling web application using intelligent task prioritization.",
  },
  {
    title: "ESP8266 IoT Dashboard",
    desc: "Real-time dashboard to monitor sensor data and embedded systems.",
  },
  {
    title: "Portfolio Improvements",
    desc: "Turning my developer portfolio into a production-level platform.",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          Currently Building
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{project.title}</h3>

              <p className="text-sm text-foreground-600 dark:text-foreground-400">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}