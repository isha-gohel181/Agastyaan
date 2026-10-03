import Images from "../assets/index";

const TrainingServices = () => {
  return (
    <section
      className="
        py-20 
        bg-white 
        dark:bg-transparent
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <img
          src={`${Images.itservices}`}
          alt="Training"
          className="
            shadow-xl dark:shadow-black/50 
            rounded-xl
            hover:scale-105 transition duration-500
          "
        />

        {/* Content */}
        <div>
          <h2 className="
            text-3xl font-bold mb-6
            text-gray-800 dark:text-white
          ">
            Professional Training Institute
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Industry-oriented courses with live projects, mentorship and real
            IT exposure.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="text-[#2E7D32] dark:text-green-400">
              ✔ Full Stack Development
            </li>
            <li className="text-[#2E7D32] dark:text-green-400">
              ✔ MERN Stack
            </li>
            <li className="text-[#2E7D32] dark:text-green-400">
              ✔ UI/UX Design
            </li>
            <li className="text-[#2E7D32] dark:text-green-400">
              ✔ Internship Programs
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default TrainingServices;