import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Animation variants
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const activeIndicatorVariants = {
  initial: { scaleY: 0, opacity: 0 },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// --- Component: ToCSidebar (Table of Contents) ---
const ToCSidebar = ({ activeSlug, links, category, onLinkClick }) => {
  const basePath = `/${category.toLowerCase()}`;
  const navigate = useNavigate();

  // Function to smoothly scroll to the section
  const scrollToSection = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      // Offset by 100px to account for the fixed header
      const offset = window.innerWidth < 1024 ? 80 : 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Update the URL path on manual click
      try {
        navigate(`${basePath}/${slug}`, { replace: true });
      } catch (e) {
        console.error("Navigation failed:", e);
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full p-4 sm:p-6 bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 sm:mb-6"
      >
        <h3 className="text-base sm:text-lg font-extrabold text-gray-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b-2 border-yellow-400">
          <span className="w-1 h-5 bg-yellow-500 rounded-full"></span>
          On This Page
        </h3>
      </motion.div>

      {/* Navigation Links */}
      <nav className="space-y-1.5 sm:space-y-2">
        <AnimatePresence mode="sync">
          {links.map((link, index) => {
            const fullPath = `${basePath}/${link.slug}`;
            const isActive = link.slug === activeSlug;

            return (
              <motion.div
                key={link.slug}
                variants={itemVariants}
                custom={index}
                className="relative"
              >
                <NavLink
                  to={fullPath}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.slug);
                    if (onLinkClick) onLinkClick();
                  }}
                  className={`
                    group relative flex items-center gap-3 px-3 py-2.5 sm:py-3 rounded-xl
                    transition-all duration-300 cursor-pointer text-sm sm:text-base
                    overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-800 font-bold shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }
                  `}
                >
                  {/* Active Indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        variants={activeIndicatorVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-r-full origin-top"
                      />
                    )}
                  </AnimatePresence>

                  {/* Background Glow Effect for Active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 to-transparent blur-xl"
                    />
                  )}

                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      rotate: isActive ? 360 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <link.icon
                      size={18}
                      className={`
                        transition-colors duration-300
                        ${
                          isActive
                            ? "text-yellow-600"
                            : "text-gray-400 group-hover:text-yellow-500"
                        }
                      `}
                    />
                  </motion.div>

                  {/* Label */}
                  <span className="relative z-10 flex-1 leading-tight">
                    {link.cleanLabel}
                  </span>

                  {/* Chevron Indicator */}
                  <motion.div
                    animate={{
                      x: isActive ? 0 : -5,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <ChevronRight size={16} className="text-yellow-600" />
                  </motion.div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent
                      origin-left rounded-xl
                      ${isActive ? "hidden" : ""}
                    `}
                  />
                </NavLink>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </nav>

      {/* Footer Decoration */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6 pt-4 border-t border-gray-200"
      >
        <div className="flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse delay-150"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ToCSidebar;
