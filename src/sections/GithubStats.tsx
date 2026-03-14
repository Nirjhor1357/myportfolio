import { motion } from "framer-motion";

const GithubStats = () => {
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
          GitHub Stats
        </h2>

        <p className="text-foreground-600 dark:text-foreground-400 mt-4">
          A quick snapshot of my development activity and open-source contributions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 justify-items-center">

        {/* Stats Card */}
        <motion.img
          whileHover={{ scale: 1.03 }}
          src="https://github-readme-stats.vercel.app/api?username=Nirjhor1357&show_icons=true&theme=tokyonight&hide_border=true"
          alt="GitHub Stats"
          className="w-full max-w-lg"
        />

        {/* Streak Card */}
        <motion.img
          whileHover={{ scale: 1.03 }}
          src="https://streak-stats.demolab.com?user=Nirjhor1357&theme=tokyonight&hide_border=true"
          alt="GitHub Streak"
          className="w-full max-w-lg"
        />

      </div>

    </section>
  );
};

export default GithubStats;