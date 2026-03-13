import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubActivity() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          GitHub Activity
        </h2>

        <div className="flex justify-center">
          <GitHubCalendar
            username="Nirjhor1357"
            colorScheme="dark"
          />
        </div>
      </motion.div>
    </section>
  );
}