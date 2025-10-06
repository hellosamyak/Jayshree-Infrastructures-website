import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Info,
  Briefcase,
  Users,
  Route,
  Waypoints,
  Building,
  Wallpaper,
  ChevronRight,
} from "lucide-react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Animation variants
const containerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { icon: Info, label: "About Us", path: "/company" },
    { icon: Briefcase, label: "Our Projects", path: "/projects" },
    { icon: Users, label: "Our Strengths", path: "/strengths" },
    { icon: Route, label: "Our Journey", path: "/company/jayshree-journey" },
  ];

  const projectLinks = [
    {
      icon: Waypoints,
      label: "Roads & Highways",
      path: "/projects/roads-highways",
    },
    {
      icon: Route,
      label: "Bridges & Tunnels",
      path: "/projects/bridges-tunnels",
    },
    { icon: Building, label: "Urban Development", path: "/projects/urban" },
    { icon: Wallpaper, label: "Interior Designs", path: "/projects/epc" },
  ];

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/jayshree_infrastructure",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: LinkedInIcon,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: XIcon,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white font-sans relative overflow-hidden">
      {/* Glow Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.08),transparent)] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 sm:gap-8 items-start">
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <div className="mb-6 sm:mb-8">
              <Link to="/" className="inline-block group">
                <h3 className="inline-flex items-center gap-2 font-extrabold uppercase">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="relative"
                    >
                      <img
                        src="/logo.jpg"
                        alt="Logo"
                        // Adjusted responsive sizes for a smooth transition across breakpoints
                        className="h-12 w-12 rounded-full border-2 border-yellow-400 object-cover drop-shadow-lg sm:h-14 sm:w-14 lg:h-12 lg:w-12 md:h-12 md:w-12"
                      />
                    </motion.div>
                  </motion.div>
                  {/* Removed padding-top (pt-*) as items-center handles the alignment now */}
                  <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-sm font-extrabold text-transparent drop-shadow-lg sm:text-lg md:text-2xl">
                    JAYSHREE INFRASTRUCTURES
                  </span>
                </h3>
              </Link>
            </div>

            <p className="text-gray-400 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base max-w-md">
              The fastest growing Engineering, Procurement and Construction
              (EPC) company in Madhya Pradesh, JAYSHREE INFRASTRUCTURES is
              aligning with India's growth vision.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/inquiryform"
                // Add this onClick handler
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth", // or "auto" for an instant jump
                  });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm sm:text-base font-bold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-yellow-400/40 w-full sm:w-auto"
              >
                Submit Project Inquiry
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-extrabold uppercase tracking-wider mb-4 sm:mb-6 inline-flex items-start gap-2">
              <span className="w-1 h-5 sm:h-6 bg-yellow-500 rounded-full mt-2 sm:mt-3"></span>
              <span className="pt-2 sm:pt-4">Quick Links</span>
            </h3>
            <nav className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, i) => (
                <motion.div key={i} whileHover={{ x: 6 }}>
                  <Link
                    to={link.path}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth", // You can change this to "auto" for an instant jump
                      });
                    }}
                    className="inline-flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-yellow-400 transition-colors group text-sm sm:text-base"
                  >
                    <link.icon
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] group-hover:rotate-12 transition-transform flex-shrink-0"
                    />
                    <span className="group-hover:underline">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Our Projects */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 text-center md:text-left"
          >
            <h3 className="text-base sm:text-lg lg:text-xl font-extrabold uppercase tracking-wider mb-4 sm:mb-6 inline-flex items-start gap-2">
              <span className="w-1 h-5 sm:h-6 bg-yellow-500 rounded-full mt-2 sm:mt-3"></span>
              <span className="pt-2 sm:pt-4">Our Projects</span>
            </h3>
            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4 sm:gap-y-3">
              {projectLinks.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex justify-center md:justify-start"
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth", // You can change this to "auto" for an instant jump
                      });
                    }}
                    className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-yellow-400 transition-colors group text-sm sm:text-base"
                  >
                    <link.icon
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] group-hover:rotate-12 transition-transform flex-shrink-0"
                    />
                    <span className="group-hover:underline">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 border-t border-gray-700 text-center md:text-left"
        >
          <h3 className="text-base sm:text-lg lg:text-xl font-extrabold uppercase tracking-wider mb-5 sm:mb-6 inline-flex items-center gap-2">
            <span className="w-1 h-5 sm:h-6 bg-yellow-500 rounded-full"></span>
            Our Social Media
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -6 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 sm:p-4 rounded-full bg-gray-800/60 backdrop-blur-md shadow-md ${social.color} transition-all hover:shadow-yellow-400/30`}
              >
                <social.icon
                  fontSize="medium"
                  className="text-xl sm:text-2xl"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 border-t border-gray-700 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gray-900 border-2 sm:border-4 border-yellow-500 shadow-xl relative"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-yellow-400/40"
            ></motion.div>
            <img
              src="/footerimg.jpg"
              alt="Certification"
              className="h-20 sm:h-24 lg:h-30 w-auto object-contain bg-black rounded-xl sm:rounded-2xl shadow-md p-2 sm:p-3 relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-14 border-t border-gray-700 pt-5 sm:pt-6"
        >
          <p className="text-center text-xs sm:text-sm text-gray-400 px-4">
            © {currentYear} JAYSHREE INFRASTRUCTURES. All rights reserved.
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Accent Line */}
      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg"></div>
    </footer>
  );
};

export default Footer;
