import {
  Users2, Award, Route, Phone, ShieldCheck, Handshake,
  Building2, Lightbulb, Hammer, Leaf, Package, TrendingUp, Wrench, Columns3, Target, Shield, Wallpaper
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
        {
          label: "Corporate Social Responsibility",
          icon: Handshake,
          image: "https://images.unsplash.com/photo-1694521787193-9293daeddbaa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Leadership",
          icon: Users2,
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
        },
      ],
      [
        {
          label: "Jayshree Journey",
          icon: Route,
          image: "https://images.unsplash.com/photo-1490133961212-53d0e60a1f73?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Contact",
          icon: Phone,
          image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "ISO 27001",
          icon: ShieldCheck,
          image: "https://imgs.search.brave.com/iP1ByOuwrJeDTDM_OPSRdkxfc8RML0QhKCLIcz6zPd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHJp/bnRvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOS9p/c28yNzAwMS1iYW5u/ZXItaW1nLndlYnA",
        },
      ],
    ],
  },
  Strengths: {
    tagline: "Engineered for Resilience.",
    links: [
      [
        {
          label: "Innovation",
          icon: Lightbulb,
          image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Execution",
          icon: Hammer,
          image: "https://images.unsplash.com/photo-1694522362256-6c907336af43?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Environment, Health & Safety",
          icon: Leaf,
          image: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=1254&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      [
        {
          label: "Backward Integration",
          icon: Package,
          image: "https://images.unsplash.com/photo-1683727609398-7693457f4717?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Sustainability",
          icon: TrendingUp,
          image: "https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    ],
  },
  Projects: {
    tagline: "Portfolio of Progress.",
    links: [
      [
        {
          label: "Ongoing Projects",
          icon: Wrench,
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        },
        {
          label: "Completed Projects",
          icon: Building2,
          image: "https://images.unsplash.com/photo-1599899525025-f247016a6644?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      [
        {
          label: "Roads & Highways",
          icon: Columns3,
          image: "https://images.unsplash.com/photo-1486673748761-a8d18475c757?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Urban Development",
          icon: Target,
          image: "https://images.unsplash.com/photo-1622461566330-30b4916ccdaf?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Bridges & Tunnels",
          icon: Shield,
          image: "https://images.unsplash.com/photo-1562778033-c4d621ed11e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          label: "Interior design",
          icon: Wallpaper,
          image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
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
