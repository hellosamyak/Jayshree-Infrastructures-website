import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building2,
  Users2,
  Award,
  Route,
  Phone,
  ShieldCheck,
  Lightbulb,
  Hammer,
  Leaf,
  Package,
  Handshake,
  TrendingUp,
  Wrench,
  FileText,
  BarChart,
  Briefcase,
  Newspaper,
  Megaphone,
  Menu, // Added for mobile toggle
  X, // Added for mobile close
} from "lucide-react";

// The menu data structure remains the same
const menuItems = {
  Company: {
    tagline: "The JAYSHREE Story.",
    links: [
      [
        { label: "Corporate Social Responsibility", icon: Handshake },
        { label: "Leadership", icon: Users2 },
        { label: "Awards & Recognitions", icon: Award },
      ],
      [
        { label: "DBL Journey", icon: Route },
        { label: "Contact", icon: Phone },
        { label: "ISO 27001", icon: ShieldCheck },
      ],
    ],
  },
  Strengths: {
    tagline: "Engineered for Resilience.",
    links: [
      [
        { label: "Innovation", icon: Lightbulb },
        { label: "Execution", icon: Hammer },
        { label: "Environment, Health & Safety", icon: Leaf },
      ],
      [
        { label: "Backward Integration", icon: Package },
        { label: "Partners", icon: Handshake },
        { label: "Sustainability", icon: TrendingUp },
      ],
    ],
  },
  Projects: {
    tagline: "Portfolio of Progress.",
    links: [
      [
        { label: "Ongoing Projects", icon: Wrench },
        { label: "Completed Projects", icon: Building2 },
      ],
    ],
  },
  Investors: {
    tagline: "The Returns on Infrastructure.",
    links: [
      [
        { label: "Reports", icon: FileText },
        { label: "Disclosures", icon: ShieldCheck },
      ],
      [{ label: "Financials", icon: BarChart }],
    ],
  },
  People: {
    tagline: "Building Teams. Building Trust.",
    links: [
      [
        { label: "Our Team", icon: Users2 },
        { label: "Culture", icon: Briefcase },
      ],
    ],
  },
  Pressroom: {
    tagline: "In the Media.",
    links: [
      [
        { label: "News", icon: Newspaper },
        { label: "Media", icon: Megaphone },
        { label: "Announcements", icon: FileText },
      ],
    ],
  },
};

// Helper function to flatten the nested links structure for mobile display
const flattenLinks = (links) => links.flat();

export default function App() {
  const [hovered, setHovered] = useState(null); // Used for desktop hover OR mobile active sub-menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close all menus when hovering stops (Desktop only)
  const handleMouseLeave = () => {
    // Only clear on mouse leave if the mobile menu is not open
    if (!isMobileMenuOpen) {
      setHovered(null);
    }
  };

  // Toggle sub-menu on mobile click
  const handleMobileMenuClick = (label) => {
    setHovered(hovered === label ? null : label);
  };

  // Function to close mobile menu after link click
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setHovered(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-sans text-white">
      {/* Top Bar (Header) */}
      <motion.div
        className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-4 backdrop-blur-sm shadow-xl transition-all duration-300"
        animate={{
          backgroundColor:
            hovered || isMobileMenuOpen
              ? "rgba(15, 26, 43, 0.95)"
              : "rgba(15, 26, 43, 0.7)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-extrabold cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          JAYSHREE INFRASTRUCTURES
        </motion.div>

        {/* Desktop Menu Items (Hidden on MD and below) */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          {Object.keys(menuItems).map((label) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Button */}
              <motion.button
                className="flex items-center gap-1 font-semibold text-sm lg:text-base"
                animate={{
                  color: hovered === label ? "#facc15" : "#ffffff",
                }}
                whileHover={{ color: "#facc15" }}
                transition={{ duration: 0.2 }}
              >
                {label}
                <motion.div
                  animate={{ rotate: hovered === label ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button (Visible on MD and below) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-yellow-400/20 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-yellow-400" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </motion.div>

      {/* ---------------------------------------------------------------------- */}
      {/* DESKTOP MEGA DROPDOWN (Hidden on mobile) */}
      {/* ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {hovered && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:block absolute left-0 w-full bg-[#0f1a2b]/95 backdrop-blur-lg shadow-2xl overflow-hidden border-t border-yellow-400/30"
            onMouseEnter={() => setHovered(hovered)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="max-w-7xl mx-auto grid grid-cols-3 gap-10 px-10 py-10"
            >
              {/* Left side tagline */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <motion.h2
                  className="text-yellow-400 text-sm uppercase mb-2 tracking-widest font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {hovered}
                </motion.h2>
                <motion.h1
                  className="text-3xl font-extrabold leading-snug"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  {menuItems[hovered].tagline}
                </motion.h1>
              </motion.div>

              {/* Right side links */}
              <div className="col-span-2 grid grid-cols-2 gap-6">
                {menuItems[hovered].links.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-3">
                    {col.map(({ label: linkLabel, icon: Icon }, linkIdx) => (
                      <motion.div
                        key={linkIdx}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + (colIdx * 3 + linkIdx) * 0.05,
                        }}
                        whileHover={{ x: 8 }}
                        className="flex justify-between items-center border-b border-gray-700/50 pb-3 cursor-pointer group transition-transform"
                      >
                        <span className="flex items-center gap-3 group-hover:text-yellow-400 transition-colors">
                          <motion.span
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="text-yellow-400 flex-shrink-0"
                          >
                            <Icon size={18} />
                          </motion.span>
                          <span className="text-base font-medium">
                            {linkLabel}
                          </span>
                        </span>
                        <motion.span
                          className="text-yellow-400 text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------------------- */}
      {/* MOBILE FULL-SCREEN MENU (Visible on mobile) */}
      {/* ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-[68px] bg-[#0f1a2b] overflow-y-auto pt-2 pb-10"
            style={{ top: "68px" }} // Fixed offset for the header
          >
            <div className="flex flex-col space-y-1 px-4 sm:px-6">
              {Object.keys(menuItems).map((label) => (
                <div
                  key={label}
                  className="border-b border-gray-700/50 last:border-b-0"
                >
                  {/* Mobile Button: Clicks to toggle sub-menu (sets/clears 'hovered') */}
                  <motion.button
                    className="w-full flex items-center justify-between py-3 px-3 text-lg font-bold transition-colors"
                    onClick={() => handleMobileMenuClick(label)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {label}
                    <motion.div
                      animate={{ rotate: hovered === label ? 180 : 0 }}
                    >
                      <ChevronDown size={20} className="text-yellow-400" />
                    </motion.div>
                  </motion.button>

                  {/* Mobile Sub-menu content */}
                  <AnimatePresence>
                    {hovered === label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="py-2 pl-4 bg-[#142236] overflow-hidden rounded-b-lg"
                      >
                        <h3 className="text-yellow-400 text-xs uppercase pt-2 pb-2 tracking-widest font-medium pl-3">
                          {menuItems[label].tagline}
                        </h3>
                        <div className="space-y-1 pb-2">
                          {/* Flatten and display links vertically */}
                          {flattenLinks(menuItems[label].links).map(
                            ({ label: linkLabel, icon: Icon }, linkIdx) => (
                              <div
                                key={linkIdx}
                                className="flex items-center gap-3 py-2 px-3 ml-2 rounded-lg hover:bg-[#1a2b45] cursor-pointer transition-colors"
                                onClick={closeMobileMenu} // Close the menu on link click
                              >
                                <Icon
                                  size={16}
                                  className="text-yellow-400 flex-shrink-0"
                                />
                                <span className="text-sm font-medium">
                                  {linkLabel}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Content Below (To show the fixed header working) */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 pt-32 flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            JAYSHREE INFRASTRUCTURES
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From Concept to Creation! Build Your Dream With Us.
          </motion.p>
        </motion.div>
      </div>
    </nav>
  );
}
