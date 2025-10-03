import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Import refactored components and hooks/data
import ToCSidebar from "../components/ToCSidebar";
import { useActiveHeading } from "../hooks/useActiveHeading";
import { menuItems, getCategoryLinks } from "../utils/data";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const slideUpVariants = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// --- Component: CategoryPage ---
const CategoryPage = () => {
  const { categoryName } = useParams();

  const category = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : "Company";

  const links = useMemo(() => getCategoryLinks(category), [category]);
  const tagline = menuItems[category]?.tagline || "Content Not Found.";

  const [isMobileToCOpen, setIsMobileToCOpen] = useState(false);

  const headingSlugs = useMemo(() => links.map((link) => link.slug), [links]);
  const activeSlug = useActiveHeading(headingSlugs);

  const location = useLocation();
  const navigate = useNavigate();

  // Lock body scroll when mobile ToC is open
  useEffect(() => {
    if (isMobileToCOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileToCOpen]);

  // Handle Initial Load/Default Route Redirect
  useEffect(() => {
    const currentCategoryPath = categoryName ? `/${categoryName}` : "/";

    if (location.pathname === currentCategoryPath && links.length > 0) {
      const firstSlug = links[0].slug;

      if (firstSlug) {
        const targetPath = categoryName
          ? `/${categoryName}/${firstSlug}`
          : `/company/${firstSlug}`;

        navigate(targetPath, { replace: true });

        setTimeout(() => {
          const element = document.getElementById(firstSlug);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  }, [location.pathname, categoryName, links, navigate]);

  // Fallback for 404/Missing Data
  if (!links.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-32 md:pt-40 px-4 text-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center"
      >
        <div className="max-w-md">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-red-500 mb-4"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            The page or category '
            <span className="font-semibold text-gray-800">{category}</span>'
            could not be found or has no content.
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // Function to generate dummy content
  const generateDummyContent = (link, index) => (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="prose max-w-none text-gray-800 space-y-6 mb-16"
    >
      <div className="relative">
        <h2
          id={link.slug}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 pt-20 -mt-20 mb-6 pb-4 border-b-2 border-yellow-400 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <link.icon size={28} className="text-yellow-600 flex-shrink-0" />
          </motion.div>
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {link.cleanLabel}
          </span>
        </h2>
      </div>

      <p className="text-base sm:text-lg leading-relaxed text-gray-700">
        JAYSHREE's commitment to {link.cleanLabel.toLowerCase()} is deeply woven
        into our operational framework. This section details our core principles
        and practices in this crucial area.
      </p>

      {/* Dummy Content Blocks */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={`https://placehold.co/600x400/fff3cd/422006?text=Image+for+${link.cleanLabel.replace(
              /[^a-zA-Z]/g,
              ""
            )}`}
            alt={`Visual representation of ${link.cleanLabel}`}
            className="w-full h-auto rounded-xl border-2 border-gray-200 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/ccc/333?text=Image+Unavailable";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <ChevronRight className="text-yellow-600" size={20} />
              Strategic Pillar
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our approach integrates modern analytical techniques to ensure
              maximum resilience and long-term viability. We focus on continuous
              improvement and feedback loops to adapt to changing regulatory and
              environmental landscapes.
            </p>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <ChevronRight className="text-yellow-600" size={20} />
              Impact Metrics
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-2"
              >
                <span className="text-yellow-600 font-bold mt-1">•</span>
                <span>Over 95% on-time project completion rate.</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-2"
              >
                <span className="text-yellow-600 font-bold mt-1">•</span>
                <span>
                  Reduction of 15% in operational carbon footprint since 2020.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-2"
              >
                <span className="text-yellow-600 font-bold mt-1">•</span>
                <span>
                  Zero Lost Time Injury (LTI) rate maintained over the last four
                  quarters.
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="h-32 sm:h-40 md:h-48"></div>
      {link.slug === headingSlugs[headingSlugs.length - 1] && (
        <div className="h-[40vh] sm:h-[50vh] md:h-[70vh]"></div>
      )}
    </motion.div>
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20 sm:pt-24 md:pt-28 pb-12 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.header
          variants={contentVariants}
          className="py-6 sm:py-8 md:py-10 border-b-2 border-gray-200 mb-8 md:mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-yellow-600 font-bold uppercase tracking-widest mb-2"
          >
            {category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            {tagline}
          </motion.h1>
        </motion.header>

        {/* Mobile ToC Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setIsMobileToCOpen(!isMobileToCOpen)}
          className="lg:hidden w-full p-3 sm:p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl mb-6 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 active:scale-95 transition-all duration-200"
        >
          <motion.div
            animate={{ rotate: isMobileToCOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileToCOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
          {isMobileToCOpen
            ? "Hide Table of Contents"
            : "Show Table of Contents"}
        </motion.button>

        {/* Content Area with Sidebar */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
          {/* Main Content */}
          <motion.div
            variants={contentVariants}
            className="lg:col-span-8 xl:col-span-9 col-span-12"
          >
            {links.map((link, index) => (
              <React.Fragment key={link.slug}>
                {generateDummyContent(link, index)}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Right Sidebar - Desktop */}
          <aside className="lg:col-span-4 xl:col-span-3 col-span-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:block lg:sticky lg:top-24"
            >
              <ToCSidebar
                activeSlug={activeSlug}
                links={links}
                category={category}
              />
            </motion.div>
          </aside>
        </div>

        {/* Mobile Full-Screen Sidebar */}
        <AnimatePresence mode="wait">
          {isMobileToCOpen && (
            <>
              <motion.div
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMobileToCOpen(false)}
              />
              <motion.div
                variants={slideUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed inset-x-0 bottom-0 top-20 sm:top-24 bg-gradient-to-b from-gray-900 to-gray-800 z-50 lg:hidden overflow-y-auto rounded-t-3xl shadow-2xl"
              >
                <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md z-10 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">
                    Table of Contents
                  </h3>
                  <button
                    onClick={() => setIsMobileToCOpen(false)}
                    className="text-white hover:text-yellow-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-4 sm:p-6">
                  <ToCSidebar
                    activeSlug={activeSlug}
                    links={links}
                    category={category}
                    onLinkClick={() => setIsMobileToCOpen(false)}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CategoryPage;
