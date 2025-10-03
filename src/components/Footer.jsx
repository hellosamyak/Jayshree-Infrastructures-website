import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Info,
  Newspaper,
  Briefcase,
  Users,
  Leaf,
  Building2,
  Train,
  Plane,
  Mountain,
  Droplets,
  Route,
  Sparkles,
} from "lucide-react";
import FaxIcon from "@mui/icons-material/Fax";
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
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Contact Information
  const contactInfo = [
    {
      icon: Phone,
      label: "PHONE",
      value: "+91-755-402-9999",
      href: "tel:+917554029999",
    },
    {
      icon: FaxIcon,
      label: "FAX",
      value: "+91-755-402-9998",
      href: "tel:+917554029998",
    },
    {
      icon: Mail,
      label: "EMAIL",
      value: "contactus@jayshree.co.in",
      href: "mailto:contactus@jayshree.co.in",
    },
  ];

  // Quick Links
  const quickLinks = [
    { icon: Info, label: "About Us", path: "/company/about" },
    { icon: Newspaper, label: "Latest News", path: "/company/news" },
    { icon: Briefcase, label: "Our Projects", path: "/projects" },
    { icon: Users, label: "Careers", path: "/company/careers" },
    { icon: Leaf, label: "ESG", path: "/company/esg" },
  ];

  // Our Projects
  const projectLinks = [
    { icon: Building2, label: "Roads And Highways", path: "/projects/roads" },
    { icon: Train, label: "Rails & Metro", path: "/projects/rails" },
    { icon: Plane, label: "Airport", path: "/projects/airport" },
    { icon: Mountain, label: "Mining", path: "/projects/mining" },
    { icon: Droplets, label: "Irrigation", path: "/projects/irrigation" },
    { icon: Route, label: "Special Bridges", path: "/projects/bridges" },
    { icon: Building2, label: "Urban Development", path: "/projects/urban" },
  ];

  // Social Media Links
  const socialLinks = [
    {
      icon: FacebookIcon,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com",
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="inline-block group mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="text-yellow-400" size={32} />
                </motion.div>
                <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                  JAYSHREE
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              The fastest growing Engineering, Procurement and Construction
              (EPC) company in India, JAYSHREE INFRASTRUCTURES is aligning with
              India's growth vision.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/company/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
              >
                View More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider">
                Quick Links
              </h3>
            </div>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group text-sm sm:text-base"
                  >
                    <link.icon
                      size={16}
                      className="group-hover:rotate-12 transition-transform"
                    />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Our Projects - Split into 2 columns on mobile */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider">
                Our Projects
              </h3>
            </div>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group text-sm sm:text-base"
                  >
                    <link.icon
                      size={16}
                      className="group-hover:rotate-12 transition-transform"
                    />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t-2 border-gray-700"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
            <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider">
              Our Social Media
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 bg-gray-700 rounded-xl ${social.color} transition-all shadow-lg hover:shadow-2xl`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t-2 border-gray-700"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white rounded-2xl shadow-lg"
            >
              <img
                src="https://placehold.co/120x120/f3f4f6/422006?text=ISO+Certified"
                alt="ISO Certification"
                className="h-16 sm:h-20 w-auto"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white rounded-2xl shadow-lg"
            >
              <img
                src="https://placehold.co/120x120/f3f4f6/422006?text=Quality+Management"
                alt="Quality Management"
                className="h-16 sm:h-20 w-auto"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-white rounded-2xl shadow-lg"
            >
              <img
                src="https://placehold.co/120x120/f3f4f6/422006?text=Accredited"
                alt="Accreditation Badge"
                className="h-16 sm:h-20 w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="text-center sm:text-left">
              Copyright © {currentYear} JAYSHREE INFRASTRUCTURES. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/privacy"
                className="hover:text-yellow-400 transition-colors font-medium"
              >
                Privacy & Legal
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/sitemap"
                className="hover:text-yellow-400 transition-colors font-medium"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"></div>
    </footer>
  );
};

export default Footer;
