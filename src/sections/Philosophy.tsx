import { motion } from "framer-motion";

const principles = [
  {
    title: "Clarity Over Complexity",
    description:
      "I believe good software should be simple, readable, and maintainable. Clean architecture and clear code structure are always my priorities.",
  },
  {
    title: "User Experience Matters",
    description:
      "Software should feel intuitive and smooth. I focus on usability, responsiveness, and thoughtful interaction design.",
  },
  {
    title: "Build → Learn → Improve",
    description:
      "Every project is an opportunity to experiment and grow. I continuously refine my skills through hands-on development.",
  },
  {
    title: "Engineering with Purpose",
    description:
      "Technology should solve real problems. I aim to design systems that are practical, scalable, and meaningful.",
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold dark:text-white">
          Engineering Philosophy
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          The principles that guide how I design, build, and improve software systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {principles.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6 }}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}