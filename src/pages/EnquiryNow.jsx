import { useState } from "react";

const EnquiryNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, message } = formData;
    
    if (!name || !email || !phone || !course) {
      alert("Please fill all the required fields.");
      return;
    }
    
    const text = `*[NEW COURSE ENQUIRY]*\n\nHello Agastyaan Technology!\n\nHere are the details:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Course:* ${course}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.location.href = `https://wa.me/916230466249?text=${encodedText}`;
    
    // Reset the form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  // Dark friendly input
  const inputClass = `
    mt-1 w-full px-4 py-2 rounded-md
    border border-gray-300 dark:border-gray-700
    bg-white dark:bg-gray-900
    text-gray-800 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:border-[#F28C28]
    focus:ring-2 focus:ring-[#F28C28]/40
    transition
  `;

  return (
    <div
      className="
        min-h-[100dvh] py-10 md:py-12
        bg-gradient-to-br from-[#fff7ed] via-white to-[#f0fdf4]
        dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-transparent
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Card */}
        <div className="
          max-w-7xl mx-auto overflow-hidden rounded-xl
          bg-white dark:bg-[#080e24]/90
          backdrop-blur-xl
          shadow-xl dark:shadow-black/40
          border border-gray-200 dark:border-white/10
        " data-aos="zoom-in">

          {/* Header */}
          <div className="bg-[#F28C28] p-8 text-white">
            <h1 className="text-3xl font-bold">Enquiry Now</h1>
            <p className="mt-2 text-white/90">
              Fill the form and our team will contact you soon
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={inputClass}
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Course Interested In
              </label>
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select course</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={inputClass}
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="
                  w-full py-3 rounded-md
                  bg-[#F28C28] text-white font-semibold
                  hover:bg-orange-600 hover:scale-[1.02]
                  transition duration-300
                "
              >
                Submit Enquiry
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default EnquiryNow;