import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          Project Case Study
        </h2>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">
              TaskManager Pro
            </h3>

            <p className="text-foreground-600 dark:text-foreground-400 mb-3">
              A productivity-focused task management web application designed
              to help users organize tasks with priority levels and structured
              workflow.
            </p>

            <ul className="text-sm space-y-1 text-foreground-600 dark:text-foreground-400">
              <li>• Built using React + TypeScript + Tailwind</li>
              <li>• Component-based architecture</li>
              <li>• Optimized UI for productivity</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}