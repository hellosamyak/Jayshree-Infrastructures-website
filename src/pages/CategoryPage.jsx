import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Import refactored components and hooks/data (Ensure correct path to utils)
import ToCSidebar from "../components/ToCSidebar";
import { useActiveHeading } from "../hooks/useActiveHeading";
// FIX: Ensure getCategoryLinks is imported here
import { menuItems, getCategoryLinks } from "../utils/data";

// --- Component: CategoryPage (Reusable for Company, Strengths, Projects) ---
const CategoryPage = () => {
  // Use useParams to dynamically get the category name from the App.jsx route
  const { categoryName } = useParams();

  // Ensure categoryName is capitalized for data lookup (e.g., 'company' -> 'Company')
  const category = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : "Company";

  // Fetch links and tagline based on the current category
  const links = useMemo(() => getCategoryLinks(category), [category]);
  const tagline = menuItems[category]?.tagline || "Content Not Found.";

  const [isMobileToCOpen, setIsMobileToCOpen] = useState(false);

  const headingSlugs = useMemo(() => links.map((link) => link.slug), [links]);
  const activeSlug = useActiveHeading(headingSlugs);

  const location = useLocation();
  const navigate = useNavigate();

  // Handle Initial Load/Default Route Redirect
  useEffect(() => {
    // If categoryName is undefined (meaning we hit the root route '/') default to 'company'
    const currentCategoryPath = categoryName ? `/${categoryName}` : "/";

    // We only perform the redirect if the URL is *exactly* the base path
    // AND we have data for this category.
    if (location.pathname === currentCategoryPath && links.length > 0) {
      const firstSlug = links[0].slug;

      if (firstSlug) {
        // Build the target path dynamically
        const targetPath = categoryName
          ? `/${categoryName}/${firstSlug}`
          : `/company/${firstSlug}`;

        navigate(targetPath, { replace: true });

        const element = document.getElementById(firstSlug);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 100, behavior: "auto" });
        }
      }
    }
  }, [location.pathname, categoryName, links, navigate]);

  // Fallback for 404/Missing Data
  if (!links.length) {
    return (
      <div className="min-h-screen pt-40 text-center bg-gray-50">
        <h1 className="text-4xl font-bold text-red-500">404 Error</h1>
        <p className="text-gray-600 mt-2">
          The page or category '{category}' could not be found or has no
          content.
        </p>
      </div>
    );
  }

  // Function to generate dummy content
  const generateDummyContent = (link) => (
    <div className="prose max-w-none text-gray-800 space-y-4">
      <h2
        id={link.slug}
        className="text-3xl font-extrabold text-gray-800 pt-16 -mt-16 mb-6 border-b pb-2 flex items-center gap-3"
      >
        <link.icon size={24} className="text-yellow-600" /> {link.cleanLabel}
      </h2>
      <p className="text-lg leading-relaxed">
        JAYSHREE's commitment to {link.cleanLabel.toLowerCase()} is deeply woven
        into our operational framework. This section details our core principles
        and practices in this crucial area.
      </p>
      {/* Dummy Content Blocks */}
      <div className="grid md:grid-cols-2 gap-8 py-4">
        <img
          src={`https://placehold.co/600x400/fff3cd/422006?text=Image+for+${link.cleanLabel.replace(
            /[^a-zA-Z]/g,
            ""
          )}`}
          alt={`Visual representation of ${link.cleanLabel}`}
          className="w-full h-auto rounded-xl shadow-md border border-gray-200"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/ccc/333?text=Image+Unavailable";
          }}
        />
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-gray-700">
            Strategic Pillar
          </h4>
          <p className="text-gray-600">
            Our approach integrates modern analytical techniques to ensure
            maximum resilience and long-term viability. We focus on continuous
            improvement and feedback loops to adapt to changing regulatory and
            environmental landscapes. This ensures every project meets global
            standards.
          </p>
          <h4 className="text-xl font-semibold text-gray-700">
            Impact Metrics
          </h4>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Over 95% on-time project completion rate.</li>
            <li>
              Reduction of 15% in operational carbon footprint since 2020.
            </li>
            <li>
              Zero Lost Time Injury (LTI) rate maintained over the last four
              quarters.
            </li>
          </ul>
        </div>
      </div>
      <div className="h-48"></div>
      {link.slug === headingSlugs[headingSlugs.length - 1] && (
        <div className="h-[70vh]"></div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <header className="py-8 border-b border-gray-200 mb-8">
          <p className="text-sm text-yellow-600 font-semibold uppercase tracking-widest">
            {category}
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-1">
            {tagline}
          </h1>
        </header>

        {/* Mobile ToC Toggle Button (Visible below LG breakpoint) */}
        <button
          onClick={() => setIsMobileToCOpen(!isMobileToCOpen)}
          className="lg:hidden w-full p-3 bg-yellow-500 text-white font-bold rounded-lg mb-6 flex items-center justify-center gap-2 shadow-lg hover:bg-yellow-600 transition-colors"
        >
          {isMobileToCOpen ? <X size={20} /> : <Menu size={20} />}
          {isMobileToCOpen
            ? "Hide Table of Contents"
            : "Show Table of Contents"}
        </button>

        {/* Content Area with Sidebar */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-9 col-span-12">
            {links.map((link) => (
              <React.Fragment key={link.slug}>
                {generateDummyContent(link)}
              </React.Fragment>
            ))}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 col-span-12">
            <div className="hidden lg:block lg:sticky lg:top-24">
              <ToCSidebar
                activeSlug={activeSlug}
                links={links}
                category={category}
              />
            </div>
          </aside>
        </div>

        {/* Mobile Full-Screen Sidebar */}
        <AnimatePresence>
          {isMobileToCOpen && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-0 pt-24 pb-4 px-4 bg-gray-900/95 backdrop-blur-sm z-40 lg:hidden overflow-y-auto"
            >
              <div className="w-full">
                <ToCSidebar
                  activeSlug={activeSlug}
                  links={links}
                  category={category}
                  onLinkClick={() => setIsMobileToCOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CategoryPage;
