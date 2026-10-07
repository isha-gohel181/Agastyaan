import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Monitor,
  Smartphone,
  PenTool,
  Megaphone,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Industry Oriented Training",
    desc: "Job-ready courses with live projects, expert mentors and placement support.",
    icon: Monitor,
    tag: "Institute",
    link: "/courses"
  },
  {
    title: "Web Development",
    desc: "High-performance websites and web applications using modern tech stacks.",
    icon: Code,
    tag: "IT Services",
    link: "/web-development"
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS applications with smooth UI and powerful backend.",
    icon: Smartphone,
    tag: "IT Services",
    link: "/app-development"
  },
  {
    title: "UI / UX Design",
    desc: "Beautiful, intuitive interfaces that provide the best user experience.",
    icon: PenTool,
    tag: "IT Services",
    link: "/ui-ux-design"
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to grow your brand and reach your audience.",
    icon: Megaphone,
    tag: "IT Services",
    link: "/digital-marketing"
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking and visibility on search engines.",
    icon: Search,
    tag: "IT Services",
    link: "/seo-optimization"
  },
];

const ServicesSection = () => {
  return (
    <section
      className="
        py-24 
        bg-transparent
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="
            inline-block mb-3 px-4 py-1 rounded-full
            bg-orange-100 dark:bg-orange-500/10
            text-orange-600 dark:text-orange-400
            text-sm font-semibold
          ">
            What We Offer
          </span>

          <h2 className="
            text-3xl md:text-4xl font-extrabold mb-4
            text-gray-900 dark:text-white
          ">
            Training Institute & IT Services Under One Roof
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            Agastyaan is not just an institute — we also deliver professional IT
            solutions for businesses and startups.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  relative p-7 rounded-2xl
                  bg-white/90 dark:bg-[#080e24]/90
                  backdrop-blur-xl
                  border border-orange-100/90 dark:border-white/10
                  shadow-md dark:shadow-black/40
                  hover:shadow-xl hover:-translate-y-2
                  transition duration-300 group
                "
              >
                {/* Tag */}
                <span
                  className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold
                    ${
                      service.tag === "Institute"
                        ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                        : "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                    }`}
                >
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="
                  w-14 h-14 flex items-center justify-center rounded-xl mb-6
                  bg-orange-100 dark:bg-orange-500/10
                  text-orange-600 dark:text-orange-400
                ">
                  <Icon size={28} />
                </div>

                <h3 className="
                  text-xl font-bold mb-3
                  text-gray-900 dark:text-white
                  group-hover:text-[#F28C28] dark:group-hover:text-orange-400
                  transition
                ">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <Link
                  to={service.link}
                  className="
                    text-[#F28C28] dark:text-orange-400
                    font-semibold hover:underline
                  "
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;