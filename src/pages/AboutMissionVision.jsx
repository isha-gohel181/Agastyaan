const AboutMissionVision = () => {
  return (
    <section className="py-20 
    bg-transparent 
    transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* Mission */}
        <div className="relative 
        bg-white/90 dark:bg-[#080e24]/90 
        border border-orange-100/90 dark:border-white/10
        backdrop-blur-xl
        p-10 rounded-3xl shadow-xl 
        dark:shadow-black/40
        hover:-translate-y-2 transition duration-300">
          
          <span className="absolute -top-6 left-6 
          bg-[#ef7b01] text-white 
          px-4 py-2 rounded-full text-sm font-bold shadow-md">
            Mission
          </span>

          <h3 className="text-3xl font-bold mb-4 
          text-gray-900 dark:text-white">
            Our Mission
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To deliver high-quality digital solutions that empower businesses,
            improve efficiency, and create real impact through technology.
          </p>
        </div>

        {/* Vision */}
        <div className="relative 
        bg-white/90 dark:bg-[#080e24]/90 
        border border-orange-100/90 dark:border-white/10
        backdrop-blur-xl
        p-10 rounded-3xl shadow-xl 
        dark:shadow-black/40
        hover:-translate-y-2 transition duration-300">
          
          <span className="absolute -top-6 left-6 
          bg-[#2E7D32] text-white 
          px-4 py-2 rounded-full text-sm font-bold shadow-md">
            Vision
          </span>

          <h3 className="text-3xl font-bold mb-4 
          text-gray-900 dark:text-white">
            Our Vision
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            To become a globally trusted technology brand known for innovation,
            transparency, and long-term partnerships.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMissionVision;