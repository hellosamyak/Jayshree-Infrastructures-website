import {
  Users2, Route, Phone, ShieldCheck, Handshake,
  Building2, Lightbulb, Hammer, Leaf, Package, TrendingUp, Wrench, Columns3, Target, Shield, Wallpaper,
  BadgeInfo
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

// --- Full Data Structure with Dynamic Content ---
export const menuItems = {
  Company: {
    tagline: "The JAYSHREE Story.",
    links: [
      [
        {
          label: "About Us",
          icon: BadgeInfo, image: "https://images.unsplash.com/photo-1562601553-b67e9e26f364?q=80&w=1074&auto=format&fit=crop",
          description: "We believe in progress that is responsible and sustainable. Our CSR initiatives focus on uplifting communities, preserving the environment, and creating a positive societal impact.",
          pillar: {
            title: "Our Core Identity",
            text: "We are defined by our unwavering commitment to client satisfaction, our passion for innovation, and our dedication to building a legacy of trust and performance."
          },
          metrics: [
            "Over 30 years of industry experience.",
            "More than 500 successful projects delivered.",
            "Maintained a 98% client satisfaction rate."
          ]
        },
        {
          label: "Corporate Social Responsibility",
          icon: Handshake, image: "https://images.unsplash.com/photo-1694521787193-9293daeddbaa?q=80&w=1169&auto=format&fit=crop",
          description: "We believe in progress that is responsible and sustainable. Our CSR initiatives focus on uplifting communities, preserving the environment, and creating a positive societal impact.",
          pillar: {
            title: "Beyond Business",
            text: "Our commitment extends beyond our projects. We actively engage in educational, environmental, and healthcare programs to foster inclusive growth and well-being."
          },
          metrics: [
            "Planted over 10,000 trees in local communities.",
            "Sponsored educational programs for 500+ children.",
            "Reduced corporate water consumption by 20%."
          ]
        },
        {
          label: "Leadership",
          icon: Users2, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
          description: "Our leadership team comprises seasoned professionals with diverse expertise and a shared vision. They guide our strategic direction and inspire our culture of excellence.",
          pillar: {
            title: "Visionary Guidance",
            text: "With a blend of deep industry knowledge and forward-thinking leadership, our executives drive the company towards new heights of success and innovation."
          },
          metrics: [
            "Over 150 years of combined executive experience.",
            "Recognized with multiple 'Industry Leader' awards.",
            "Successfully navigated 5 major economic cycles."
          ]
        },
      ],
      [
        {
          label: "Jayshree Journey",
          icon: Route, image: "https://images.unsplash.com/photo-1490133961212-53d0e60a1f73?q=80&w=1112&auto=format&fit=crop",
          description: "From our humble beginnings to becoming a key player in the industry, our journey is a testament to our resilience, adaptability, and relentless pursuit of quality.",
          pillar: {
            title: "Milestones of Growth",
            text: "Every project, partnership, and challenge has shaped who we are today. We celebrate our past achievements as we build the foundations for our future."
          },
          metrics: [
            "Expanded operations across 5 new regions.",
            "First major public infrastructure project in 1995.",
            "Achieved ISO 9001 certification in 2002."
          ]
        },
        {
          label: "Contact",
          icon: Phone, image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1170&auto=format&fit=crop",
          description: "We are here to help. Whether you have a question about our services, a potential project, or a media inquiry, our team is ready to connect with you.",
          pillar: {
            title: "Get In Touch",
            text: "Reach out to our dedicated teams via phone, email, or by visiting our headquarters. We look forward to hearing from you and exploring opportunities together."
          },
          metrics: [
            "24-hour response time for all inquiries.",
            "Offices located in 3 major metropolitan areas.",
            "Dedicated support line for active clients."
          ]
        },
        {
          label: "ISO 27001",
          icon: ShieldCheck, image: "https://imgs.search.brave.com/iP1ByOuwrJeDTDM_OPSRdkxfc8RML0QhKCLIcz6zPd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcHJp/bnRvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOS9p/c28yNzAwMS1iYW5u/ZXItaW1nLndlYnA",
          description: "Our ISO 27001 certification underscores our rigorous commitment to information security. We ensure that all client and company data is protected with the highest standards of security.",
          pillar: {
            title: "Commitment to Security",
            text: "We have implemented a comprehensive Information Security Management System (ISMS) to identify, manage, and reduce risks to our information assets."
          },
          metrics: [
            "100% compliance with ISO 27001 standards.",
            "Zero major security incidents reported.",
            "Annual mandatory security training for all employees."
          ]
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
          icon: Lightbulb, image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=687&auto=format&fit=crop",
          description: "Innovation is at the core of our identity. We continuously invest in research and development to pioneer new technologies and methodologies that redefine industry standards.",
          pillar: {
            title: "Driving the Future",
            text: "Our dedicated R&D wing explores cutting-edge materials, sustainable practices, and digital construction tools to enhance efficiency and project outcomes."
          },
          metrics: [
            "5% of annual revenue reinvested in R&D.",
            "12 new construction techniques adopted in 3 years.",
            "Partnerships with leading technology universities."
          ]
        },
        {
          label: "Execution",
          icon: Hammer, image: "https://images.unsplash.com/photo-1694522362256-6c907336af43?q=80&w=1171&auto=format&fit=crop",
          description: "A great vision is only as good as its execution. Our strength lies in our ability to translate complex blueprints into tangible, high-quality realities, on time and on budget.",
          pillar: {
            title: "From Blueprint to Reality",
            text: "We employ rigorous project management, lean construction principles, and stringent quality control at every stage to ensure flawless delivery of our projects."
          },
          metrics: [
            "95% on-time project completion rate.",
            "Consistently operate within 5% of budget variance.",
            "Recipient of the 'Excellence in Execution' award."
          ]
        },
        {
          label: "Environment, Health & Safety",
          icon: Leaf, image: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=1254&auto=format&fit=crop",
          description: "The well-being of our people and the planet is non-negotiable. Our EHS policies are integral to our operations, ensuring a safe workplace and a minimal environmental footprint.",
          pillar: {
            title: "Safety First, Always",
            text: "We enforce world-class safety protocols, conduct regular training, and utilize eco-friendly materials to create a safe and sustainable working environment."
          },
          metrics: [
            "Zero Lost Time Injury (LTI) rate for 3 consecutive years.",
            "15% reduction in carbon footprint since 2020.",
            "Fully compliant with OHSAS 18001 and ISO 14001."
          ]
        },
      ],
      [
        {
          label: "Backward Integration",
          icon: Package, image: "https://images.unsplash.com/photo-1683727609398-7693457f4717?q=80&w=1170&auto=format&fit=crop",
          description: "Our strategic backward integration gives us unparalleled control over our supply chain, ensuring timely access to high-quality materials and reducing external dependencies.",
          pillar: {
            title: "Controlling the Value Chain",
            text: "By owning key manufacturing units, such as ready-mix concrete plants and fabrication workshops, we guarantee quality and maintain project timelines effectively."
          },
          metrics: [
            "Reduced material procurement time by 30%.",
            "Ensured 100% quality compliance for key inputs.",
            "Minimized project delays due to supply chain issues."
          ]
        },
        {
          label: "Sustainability",
          icon: TrendingUp, image: "https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1176&auto=format&fit=crop",
          description: "Sustainability is woven into our business strategy. We are committed to building a better future through green construction practices, resource optimization, and long-term value creation.",
          pillar: {
            title: "Building for Generations",
            text: "We focus on using recycled materials, optimizing energy efficiency in our buildings, and designing infrastructure that stands the test of time, both structurally and environmentally."
          },
          metrics: [
            "25% of our portfolio consists of green-certified buildings.",
            "Reduced construction waste by 40% through recycling.",
            "Increased use of renewable energy on-site by 50%."
          ]
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
          icon: Wrench, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
          description: "Our ongoing projects in highways, duplexes, and bridges reflect our versatility and commitment to growth in Central India.",
          pillar: {
            title: "Building Tomorrow, Today",
            text: "From four-lane highways near Jabalpur to luxury duplexes in suburbs, we are building the backbone of progress."
          },
          metrics: [
            "Currently working on multiple PWD projects.",
            "Active residential developments in Jabalpur.",
            "Bridge construction underway in rural corridors."
          ]
        },
        {
          label: "Completed Projects",
          icon: Building2, image: "https://images.unsplash.com/photo-1599899525025-f247016a6644?q=80&w=1228&auto=format&fit=crop",
          description: "Our portfolio of completed projects stands as a proud testament to our engineering prowess and commitment to excellence. Each structure tells a story of precision and durability.",
          pillar: {
            title: "A Legacy of Excellence",
            text: "We have successfully delivered a wide range of projects, including highways, bridges, urban developments, and industrial complexes, each one a landmark of quality."
          },
          metrics: [
            "Over 500 completed projects to date.",
            "Delivered more than 1,000 km of highways.",
            "Constructed several award-winning architectural icons."
          ]
        },
      ],
      [
        {
          label: "Roads & Highways",
          icon: Columns3, image: "https://images.unsplash.com/photo-1486673748761-a8d18475c757?q=80&w=1170&auto=format&fit=crop",
          description: "We build the arteries of the nation. Our expertise in constructing roads and highways connects people and facilitates economic growth through robust and reliable infrastructure.",
          pillar: {
            title: "Paving the Way Forward",
            text: "Utilizing state-of-the-art paving technology and durable materials, we create road networks that are built to last, ensuring safety and smooth transit."
          },
          metrics: [
            "Constructed 6-lane expressways spanning 200+ km.",
            "Specialized in high-altitude road construction.",
            "Implemented smart traffic management systems."
          ]
        },
        {
          label: "Duplexes & Residential Apartments", // Mapped from "Urban Development"
          icon: Target, image: "https://images.unsplash.com/photo-1622461566330-30b4916ccdaf?q=80&w=1631&auto=format&fit=crop",
          description: "We create vibrant urban spaces where communities can thrive. Our urban development projects focus on integrated planning, sustainable design, and smart city solutions.",
          pillar: {
            title: "Crafting Modern Lifestyles",
            text: "From residential townships to commercial hubs, we design and build environments that are functional, aesthetically pleasing, and environmentally conscious."
          },
          metrics: [
            "Developed 3 major smart-city sub-projects.",
            "Built integrated townships with green spaces and amenities.",
            "Revitalized urban areas with modern infrastructure."
          ]
        },
        {
          label: "Bridges & Tunnels",
          icon: Shield, image: "https://images.unsplash.com/photo-1562778033-c4d621ed11e1?q=80&w=1074&auto=format&fit=crop",
          description: "We specialize in overcoming geographical barriers with sophisticated engineering. Our bridges and tunnels are marvels of modern construction, designed for safety and longevity.",
          pillar: {
            title: "Connecting Terrains",
            text: "From cable-stayed bridges over wide rivers to tunnels through challenging mountains, we employ advanced geotechnical and structural engineering to deliver critical links."
          },
          metrics: [
            "Constructed India's 3rd longest river bridge.",
            "Utilized Tunnel Boring Machines (TBM) for rapid excavation.",
            "Zero structural failures in our entire history."
          ]
        },
        {
          label: "Interior Design",
          icon: Wallpaper, image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1213&auto=format&fit=crop",
          description: "Our expertise extends to crafting exceptional interior spaces. We blend aesthetics with functionality to create environments that inspire and enhance the user experience.",
          pillar: {
            title: "Designing Experiences",
            text: "Our in-house design team works closely with clients to create bespoke interiors for corporate offices, luxury residences, and retail spaces that reflect their unique identity."
          },
          metrics: [
            "Designed over 1 million sq. ft. of commercial interiors.",
            "Won accolades for innovative office space design.",
            "Focus on ergonomic and sustainable interior solutions."
          ]
        },
      ],
    ],
  },
};

/**
 * Helper function to retrieve and flatten links for any category.
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