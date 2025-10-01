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
} from "lucide-react";

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

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white">
      {/* Top Bar */}
      <motion.div
        className="flex items-center justify-between px-10 py-4 backdrop-blur-sm"
        animate={{
          backgroundColor: hovered
            ? "rgba(15, 26, 43, 0.95)"
            : "rgba(15, 26, 43, 0.7)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          JAYSHREE INFRASTRUCTURES
        </motion.div>

        {/* Menu Items */}
        <ul className="flex gap-8">
          {Object.keys(menuItems).map((label) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Button */}
              <motion.button
                className="flex items-center gap-1 font-semibold"
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
      </motion.div>

      {/* Dropdown Panel - Full Width */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 w-full bg-[#0f1a2b]/95 backdrop-blur-lg shadow-2xl overflow-hidden"
            onMouseEnter={() => setHovered(hovered)}
            onMouseLeave={() => setHovered(null)}
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
                  className="text-yellow-400 text-sm uppercase mb-2 tracking-wide font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {hovered}
                </motion.h2>
                <motion.h1
                  className="text-3xl font-bold leading-snug"
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
                        className="flex justify-between items-center border-b border-gray-700/50 pb-3 cursor-pointer group"
                      >
                        <span className="flex items-center gap-3 group-hover:text-yellow-400 transition-colors">
                          <motion.span
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="text-yellow-400"
                          >
                            <Icon size={16} />
                          </motion.span>
                          <span className="text-sm">{linkLabel}</span>
                        </span>
                        <motion.span
                          className="text-yellow-400 text-lg"
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
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

      {/* Demo Content Below */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 pt-20 flex items-center justify-center">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            JAYSHREE INFRASTRUCTURES
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
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
