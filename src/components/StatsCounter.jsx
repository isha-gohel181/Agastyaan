import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { id: 1, label: "Students Placed", value: 450, suffix: "+" },
  { id: 2, label: "Live Projects", value: 45, suffix: "+" },
  { id: 3, label: "Expert Mentors", value: 15, suffix: "+" },
  { id: 4, label: "Hiring Partners", value: 50, suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const effectiveStepTime = stepTime > 0 ? stepTime : 10;
      const step = Math.ceil(value / (duration / effectiveStepTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, effectiveStepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#ef7b01] bg-clip-text text-transparent drop-shadow-sm mb-2"
    >
      {count}
      {suffix}
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="relative py-12 md:py-16 bg-transparent transition-colors duration-500 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#ef7b01]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                p-6 sm:p-8 rounded-3xl
                bg-white/95 dark:bg-[#080e24]/90
                backdrop-blur-xl
                border border-orange-100/90 dark:border-white/[0.12]
                shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(239,123,1,0.05)]
                hover:scale-105 hover:border-[#ef7b01]/60 dark:hover:border-[#ef7b01]/60
                hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-[0_15px_35px_rgba(239,123,1,0.2)]
                transition-all duration-300
              "
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-700 dark:text-[#9fb0d9] font-bold text-sm sm:text-base mt-2 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
