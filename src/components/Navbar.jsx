import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

// Import data and utility functions from the centralized data file
import { menuItems, slugify } from "../utils/data";

// Animation variants
const menuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const mobileMenuVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const linkVariants = {
  initial: { x: 20, opacity: 0 },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: custom * 0.05,
      ease: "easeOut",
    },
  }),
};

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close all menus when hovering stops (Desktop only)
  const handleMouseLeave = () => {
    if (!isMobileMenuOpen) {
      setHovered(null);
    }
  };

  // Toggle sub-menu on mobile click
  const handleMobileMenuClick = (label) => {
    setHovered(hovered === label ? null : label);
  };

  // Function to close mobile menu after link click
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setHovered(null);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* Top Bar (Header) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12 py-3 sm:py-4
          backdrop-blur-md shadow-2xl transition-all duration-300
          ${
            scrolled
              ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-yellow-500/10"
              : "bg-gradient-to-r from-[#0f1a2b]/95 via-[#1a2b45]/95 to-[#0f1a2b]/95"
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group" onClick={closeMobileMenu}>
          <motion.div
            className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hidden sm:block"
            >
              <Sparkles className="text-yellow-400" size={20} />
            </motion.div>
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent group-hover:from-yellow-200 group-hover:via-yellow-400 group-hover:to-yellow-200 transition-all duration-300">
              JAYSHREE INFRASTRUCTURES
            </span>
          </motion.div>
        </Link>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 ml-auto items-center">
          {Object.keys(menuItems).map((label) => (
            <motion.li
              key={label}
              className="relative"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-1.5">
                <NavLink
                  to={`/${label.toLowerCase()}`}
                  onClick={() => setHovered(null)}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1 font-bold text-sm lg:text-base transition-all duration-300 py-2 px-1 group
                    ${
                      isActive || hovered === label
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {label}
                  {/* Underline effect */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: hovered === label ? "100%" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>

                {/* Dropdown Chevron */}
                <motion.div
                  animate={{
                    rotate: hovered === label ? 180 : 0,
                    scale: hovered === label ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="cursor-pointer text-yellow-400"
                  onClick={() => setHovered(label)}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-xl hover:bg-yellow-400/20 active:bg-yellow-400/30 transition-all flex-shrink-0 relative overflow-hidden group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} className="text-yellow-400 relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className="text-white relative z-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* DESKTOP MEGA DROPDOWN */}
      <AnimatePresence>
        {hovered && !isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="hidden md:block absolute left-0 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl shadow-2xl overflow-hidden border-t-2 border-yellow-400/30"
            onMouseEnter={() => setHovered(hovered)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5 pointer-events-none" />

            <motion.div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-8 lg:py-10 relative z-10">
              {/* Left side tagline */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <h2 className="text-yellow-400 text-xs uppercase tracking-widest font-bold">
                    {hovered}
                  </h2>
                </motion.div>
                <motion.h1
                  className="text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {menuItems[hovered].tagline}
                </motion.h1>
                <motion.p
                  className="text-gray-400 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Explore our comprehensive solutions and services
                </motion.p>
              </motion.div>

              {/* Right side links */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {menuItems[hovered].links.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-2">
                    {col.map(({ label: linkLabel, icon: Icon }, linkIdx) => (
                      <Link
                        key={linkIdx}
                        to={`/${hovered.toLowerCase()}/${slugify(linkLabel)}`}
                        onClick={() => setHovered(null)}
                        className="block group"
                      >
                        <motion.div
                          custom={colIdx * 3 + linkIdx}
                          variants={linkVariants}
                          initial="initial"
                          animate="animate"
                          whileHover={{ x: 8, scale: 1.02 }}
                          className="flex justify-between items-center p-3 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:bg-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
                        >
                          <span className="flex items-center gap-3 group-hover:text-yellow-400 transition-colors">
                            <motion.span
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                              className="text-yellow-400 flex-shrink-0 p-1.5 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20"
                            >
                              <Icon size={18} />
                            </motion.span>
                            <span className="text-sm lg:text-base font-semibold text-gray-200">
                              {linkLabel}
                            </span>
                          </span>
                          <motion.span
                            className="text-yellow-400 text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden fixed right-0 top-[60px] sm:top-[68px] bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-y-auto z-50 shadow-2xl border-l-2 border-yellow-400/30"
            >
              <div className="flex flex-col space-y-1 p-4 sm:p-6">
                {Object.keys(menuItems).map((label, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="border-b border-gray-700/50 last:border-b-0"
                  >
                    <div className="w-full flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <NavLink
                        to={`/${label.toLowerCase()}`}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `text-base sm:text-lg font-bold transition-colors ${
                            isActive
                              ? "text-yellow-400"
                              : "text-white hover:text-yellow-300"
                          }`
                        }
                      >
                        {label}
                      </NavLink>

                      <motion.button
                        className="p-1.5 rounded-lg hover:bg-yellow-400/10 transition-colors"
                        onClick={() => handleMobileMenuClick(label)}
                        whileTap={{ scale: 0.95 }}
                        aria-expanded={hovered === label}
                      >
                        <motion.div
                          animate={{ rotate: hovered === label ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} className="text-yellow-400" />
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* Mobile Sub-menu content */}
                    <AnimatePresence>
                      {hovered === label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 px-2 bg-gray-800/50 rounded-lg space-y-2 backdrop-blur-sm">
                            <h3 className="text-yellow-400 text-xs uppercase px-3 pb-2 tracking-widest font-bold flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                              {menuItems[label].tagline}
                            </h3>
                            <div className="space-y-1">
                              {menuItems[label].links
                                .flat()
                                .map(
                                  (
                                    { label: linkLabel, icon: Icon },
                                    linkIdx
                                  ) => (
                                    <motion.div
                                      key={linkIdx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: linkIdx * 0.05 }}
                                    >
                                      <Link
                                        to={`/${label.toLowerCase()}/${slugify(
                                          linkLabel
                                        )}`}
                                        className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-all group"
                                        onClick={closeMobileMenu}
                                      >
                                        <span className="p-1.5 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                                          <Icon
                                            size={16}
                                            className="text-yellow-400 flex-shrink-0"
                                          />
                                        </span>
                                        <span className="text-sm font-medium text-gray-200 group-hover:text-yellow-300 transition-colors">
                                          {linkLabel}
                                        </span>
                                      </Link>
                                    </motion.div>
                                  )
                                )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Footer decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 border-t border-gray-700/50"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse delay-150" />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
