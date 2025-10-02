import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// --- Component: ToCSidebar (Table of Contents) ---
const ToCSidebar = ({ activeSlug, links, category, onLinkClick }) => {
  const basePath = `/${category.toLowerCase()}`;
  const navigate = useNavigate();

  // Function to smoothly scroll to the section
  const scrollToSection = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      // Offset by 100px to account for the fixed header
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });

      // Attempt to update the URL path only on manual click
      try {
        // Use navigate to change the URL without reloading
        navigate(`${basePath}/${slug}`, { replace: true });
      } catch (e) {
        console.error("Navigation failed:", e);
      }
    }
  };

  return (
    <div className="w-full p-6 bg-white border border-gray-200 shadow-xl rounded-xl">
      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
        ON THIS PAGE
      </h3>
      <nav className="space-y-1">
        {links.map((link) => {
          const fullPath = `${basePath}/${link.slug}`;
          const isActive = link.slug === activeSlug;

          return (
            <NavLink
              key={link.slug}
              to={fullPath}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.slug);
                if (onLinkClick) onLinkClick(); // Close mobile menu if prop is provided
              }}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 cursor-pointer text-sm
                ${
                  isActive
                    ? "bg-yellow-100 text-yellow-700 font-semibold border-l-4 border-yellow-500 shadow-inner"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <link.icon
                size={16}
                className={isActive ? "text-yellow-500" : "text-gray-400"}
              />
              <span>{link.cleanLabel}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default ToCSidebar;
