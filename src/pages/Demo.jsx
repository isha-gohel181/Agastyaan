import React from "react";
import Images from "../assets/index";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section className="relative py-20 md:py-28 w-full overflow-hidden flex items-center justify-center border-y border-white/[0.08] bg-transparent">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
        style={{
          backgroundImage: `url(${Images.DemoImg})`,
        }}
      ></div>

      {/* Modern Midnight Gradient Overlay */}
      <div className="
        absolute inset-0 
        bg-gradient-to-r from-[#050716]/95 via-[#080e22]/90 to-[#050716]/95
        backdrop-blur-[3px]
        transition-all duration-500
      "></div>

      {/* Subtle Atmosphere Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-[#ef7b01]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Tag */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#ef7b01]/15 dark:bg-[#ef7b01]/25 border border-[#ef7b01]/40 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase">
            Transform Your Future
          </span>

          {/* Heading */}
          <h2 className="
            font-black leading-snug
            text-2xl sm:text-4xl md:text-5xl
            text-white tracking-tight
          ">
            Best{" "}
            <span className="bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] bg-clip-text text-transparent">
              6 Months / 6 Weeks
            </span>{" "}
            Industrial Training in Chandigarh
          </h2>

          {/* Subtitle */}
          <p className="
            mt-6
            text-gray-200 dark:text-[#9fb0d9]
            text-base sm:text-lg font-medium tracking-wide
            flex items-center justify-center gap-2 flex-wrap
          ">
            <span className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-[#0c1433]/80 backdrop-blur-md border border-white/20 dark:border-white/15 text-xs sm:text-sm font-bold text-white">Live Projects</span>
            <span className="hidden sm:inline text-[#ef7b01]">•</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-[#0c1433]/80 backdrop-blur-md border border-white/20 dark:border-white/15 text-xs sm:text-sm font-bold text-white">Certifications</span>
            <span className="hidden sm:inline text-[#ef7b01]">•</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 dark:bg-[#0c1433]/80 backdrop-blur-md border border-white/20 dark:border-white/15 text-xs sm:text-sm font-bold text-white">100% Job Assistance</span>
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* Primary Button */}
            <Link to="/enquiry" className="
              w-full sm:w-auto px-8 py-4 rounded-xl
              bg-[#ef7b01] hover:bg-[#2E7D32]
              text-white font-black text-sm sm:text-base
              transition-all duration-300
              hover:scale-105 active:scale-95
              shadow-xl shadow-orange-500/30 text-center
            ">
              FREE DEMO CLASS – ENROLL TODAY
            </Link>

            {/* Secondary Button */}
            <a
              href="tel:+916230466249"
              className="
                w-full sm:w-auto px-8 py-4 rounded-xl
                border-2 border-white/30 hover:border-white text-white font-black text-sm sm:text-base
                backdrop-blur-md bg-white/10 dark:bg-[#080e24]/70
                transition-all duration-300
                hover:bg-white hover:text-black hover:scale-105 active:scale-95
                text-center
              "
            >
              CALL NOW
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Demo;