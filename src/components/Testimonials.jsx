import { useState, useEffect } from "react";
import ReactSlick from "react-slick";
const Slider = ReactSlick.default || ReactSlick;
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=11",
    feedback: "The training at Agastyaan Institute completely transformed my career. The live projects helped me crack my first IT job effortlessly!",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=5",
    feedback: "Amazing mentors and hands-on experience. I learned how to build beautiful, user-centric interfaces. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Python Developer",
    image: "https://i.pravatar.cc/150?img=15",
    feedback: "Agastyaan's IT services built a scalable web app for my startup. Their development process is flawless and professional.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Digital Marketer",
    image: "https://i.pravatar.cc/150?img=9",
    feedback: "Their SEO and Digital Marketing course gave me the exact skills I needed to boost my business traffic. Great learning environment.",
  },
];

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#ef7b01]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#ef7b01]/10 dark:bg-[#ef7b01]/20 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight"
          >
            What People Say <span className="bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] bg-clip-text text-transparent">About Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-600 dark:text-[#9fb0d9] text-base sm:text-lg max-w-2xl mx-auto font-normal"
          >
            Real feedback from graduates and business partners across the globe.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative min-w-0">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((t) => (
              <div key={t.id} className="px-2 md:px-4 py-6 outline-none focus:outline-none">
                <div className="bg-white/95 dark:bg-[#080e24]/85 backdrop-blur-xl p-6 md:p-8 rounded-3xl border-2 border-orange-100/90 dark:border-white/[0.12] shadow-xl shadow-orange-500/5 dark:shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(239,123,1,0.05)] hover:border-[#ef7b01]/50 dark:hover:border-[#ef7b01]/50 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between">
                  <p className="text-gray-600 dark:text-[#9fb0d9] italic mb-6 leading-relaxed flex-grow text-sm sm:text-base font-normal">
                    "{t.feedback}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-white/[0.08]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-[#ef7b01] object-cover flex-shrink-0 shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-base">{t.name}</h4>
                      <p className="text-xs sm:text-sm text-[#2E7D32] dark:text-emerald-400 font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
