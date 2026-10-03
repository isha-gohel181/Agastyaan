import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Do you provide 100% placement assistance?",
    answer: "Yes! We provide complete placement support, including resume building, mock interviews, and direct referrals to our hiring partners.",
  },
  {
    id: 2,
    question: "Are the training projects live?",
    answer: "Absolutely. Our curriculum is designed around industry-level live projects, giving you hands-on experience before you even graduate.",
  },
  {
    id: 3,
    question: "Can beginners join your web development course?",
    answer: "Yes, our Full Stack and Web Development courses start from the very basics (HTML/CSS) and go up to advanced frameworks like React and Node.js.",
  },
  {
    id: 4,
    question: "Do you provide IT services for startups?",
    answer: "Yes, Agastyaan Technology offers end-to-end IT solutions, including Web App Development, UI/UX Design, and Digital Marketing for businesses of all sizes.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#ef7b01]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#ef7b01]/10 dark:bg-[#ef7b01]/20 border border-[#ef7b01]/30 text-[#ef7b01] dark:text-orange-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight"
          >
            Frequently Asked <span className="bg-gradient-to-r from-[#ef7b01] via-amber-400 to-[#2E7D32] bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-600 dark:text-[#9fb0d9] text-base sm:text-lg max-w-xl mx-auto font-normal"
          >
            Everything you need to know about our courses, projects, and placements.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`
                  bg-white/95 dark:bg-[#080e24]/85
                  backdrop-blur-xl
                  border-2 rounded-3xl overflow-hidden
                  transition-all duration-300
                  ${isOpen 
                    ? "border-[#ef7b01]/70 dark:border-[#ef7b01]/60 shadow-[0_10px_35px_rgba(239,123,1,0.15)]" 
                    : "border-orange-100/90 dark:border-white/[0.12] hover:border-[#ef7b01]/40 dark:hover:border-white/20 shadow-md shadow-orange-500/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  }
                `}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full transition-colors ${isOpen ? "bg-[#ef7b01]/15 text-[#ef7b01]" : "text-gray-400 bg-gray-100 dark:bg-white/5"}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-gray-600 dark:text-[#9fb0d9] leading-relaxed border-t border-gray-100 dark:border-white/[0.08] pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
