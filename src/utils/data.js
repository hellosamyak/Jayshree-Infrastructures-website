import {
  Users2, Award, Route, Phone, ShieldCheck, Handshake,
  Building2, Lightbulb, Hammer, Leaf, Package, TrendingUp, Wrench
} from "lucide-react";

// Helper function to create clean URL slugs
export const slugify = (text) => {
  const cleanedText = text.replace(/|<\/selection-tag>/g, '');
  return cleanedText
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

// --- Full Data Structure for All Pages ---
export const menuItems = {
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
};

/**
 * Helper function to retrieve and flatten links for any category.
 * This function is the missing export reported in your error.
 * @param {string} categoryName - The key in menuItems (e.g., 'Company', 'Strengths').
 * @returns {Array} An array of link objects with cleanLabel and slug.
 */
export const getCategoryLinks = (categoryName) => {
  const categoryData = menuItems[categoryName];
  if (!categoryData) return [];

  const flattened = categoryData.links.flat();
  return flattened.map(item => ({
    ...item,
    cleanLabel: item.label.replace(/|<\/selection-tag>/g, ''),
    slug: slugify(item.label),
  }));
};
