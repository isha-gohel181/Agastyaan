import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Live Projects" },
  { value: "10+", label: "Expert Mentors" },
  { value: "90%", label: "Placement Assistance" },
];

const CoursesStatsSection = () => {
  return (
    <section
      className="
        py-24 relative overflow-hidden
        bg-gradient-to-br from-orange-50 via-white to-orange-100
        dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-transparent
        transition-colors duration-500
      "
    >
      
      {/* Glow Effects */}
      <div className="
        absolute -top-32 -left-32 w-96 h-96 
        bg-orange-200/40 dark:bg-orange-500/10 
        rounded-full blur-3xl
      "></div>

      <div className="
        absolute -bottom-32 -right-32 w-96 h-96 
        bg-orange-300/40 dark:bg-orange-500/10 
        rounded-full blur-3xl
      "></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="
            inline-block mb-3 px-4 py-1 rounded-full 
            bg-orange-100 dark:bg-orange-500/10
            text-orange-600 dark:text-orange-400
            text-sm font-semibold
          ">
            Why Agastyaan Technology
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Learn. Build. Get Industry Ready.
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Practical learning, real-world projects and expert mentorship
            designed for your career growth.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                text-center p-8 rounded-2xl
                bg-white dark:bg-[#080e24]/90
                backdrop-blur-md
                border border-orange-100 dark:border-white/10
                shadow-md dark:shadow-black/40
                hover:shadow-xl hover:-translate-y-2
                transition duration-300
              "
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#ef7b01] dark:text-orange-400 mb-2">
                {item.value}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="
            flex flex-col md:flex-row items-center justify-between gap-8
            p-10 md:p-14 rounded-3xl
            bg-white dark:bg-[#080e24]/90
            backdrop-blur-xl
            border border-orange-200 dark:border-white/10
            shadow-xl dark:shadow-black/40
          "
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">
              Ready to start your tech career?
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Join Agastyaan Technology and build real skills with confidence.
            </p>
          </div>

          <Link
            to="/enquiry"
            className="
              bg-[#ef7b01] text-white font-bold 
              px-8 py-4 rounded-xl
              hover:bg-orange-600 transition
            "
          >
            Apply Now
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CoursesStatsSection;