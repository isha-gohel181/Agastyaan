const WhyChooseUs = () => {
  return (
    <section
      className="
        py-20
        bg-gradient-to-br from-orange-50 via-white to-orange-100
        dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-transparent
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="
          text-3xl md:text-4xl font-bold mb-12
          text-gray-800 dark:text-white
        ">
          Why Choose{" "}
          <span className="text-orange-500 dark:text-orange-400">
            Agastyaan Technology?
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Real IT Projects",
            "Expert Trainers",
            "Modern Tech Stack",
            "Career Support",
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl
                bg-white dark:bg-[#080e24]/90
                backdrop-blur-md
                border border-orange-100 dark:border-white/10
                shadow-lg dark:shadow-black/40
                hover:shadow-orange-200 dark:hover:shadow-orange-500/10
                hover:-translate-y-2
                transition duration-300 group
              "
            >
              <h3 className="
                text-xl font-semibold mb-3
                text-gray-800 dark:text-white
                group-hover:text-orange-500 dark:group-hover:text-orange-400
                transition
              ">
                {item}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We focus on practical growth and industry readiness.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;