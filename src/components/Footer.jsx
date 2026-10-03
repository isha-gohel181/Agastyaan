import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/_logo.webp";

const Footer = () => {
  return (
    <footer className="bg-white/95 dark:bg-[#040714]/95 text-gray-600 dark:text-[#9fb0d9] border-t border-orange-100 dark:border-white/[0.08] backdrop-blur-xl transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link to="/">
            <img src={logo} alt="Agastyaan Logo" className="h-14 w-auto mb-4" />
          </Link>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-[#9fb0d9]">
            We provide quality services and courses to help you grow your skills
            and career with confidence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            
            <a 
              href="https://www.instagram.com/agastyaantechnology?igsh=MXc0ZHViZnIxcmtx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-[#9fb0d9] hover:text-pink-500 dark:hover:text-pink-400 transition duration-300"
            >
              <Instagram size={20} />
            </a>

            <a 
              href="https://youtube.com/@techagastyaan?si=qbgfhn5QyOjPDW0M" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-[#9fb0d9] hover:text-red-500 dark:hover:text-red-400 transition duration-300"
            >
              <Youtube size={25} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-[#9fb0d9]">
            <li><Link to="/" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">Our Courses</Link></li>
            <li><Link to="/services" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-[#9fb0d9]">
            <li><Link to="/web-development" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">Web Development</Link></li>
            <li><Link to="/app-development" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">App Development</Link></li>
            <li><Link to="/ui-ux-design" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">UI / UX Design</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">Digital Marketing</Link></li>
            <li><Link to="/seo-optimization" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition">SEO Optimization</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-[#9fb0d9]">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-1 text-[#ef7b01]" />
              <span>
                Sco No 23, 2nd Floor, Opposite Nature Huts-3 Gate, Mind Tree School Road, Khanpur, Kharar, Mohali, Punjab, 140301
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#ef7b01]" />
              <a href="tel:+916230466249" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition font-medium">
                +91-6230466249
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#ef7b01]" />
              <a href="mailto:agastyaantechnology@gmail.com" className="hover:text-[#ef7b01] dark:hover:text-orange-400 transition font-medium">
                agastyaantechnology@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center text-sm text-gray-500 dark:text-[#9fb0d9]/80">
          <p>
            © {new Date().getFullYear()} Agastyaan Technology. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;