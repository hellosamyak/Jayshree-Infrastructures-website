import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import {
  ArrowRight,
  Columns3,
  Smile,
  HousePlus,
  Building2,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  IndianRupee,
  Target,
  Eye,
  Shield,
  Clock,
  Calendar,
  Wallpaper,
} from "lucide-react";
import { Link } from "react-router";
import ContactSection from "../components/ContactSection";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [countStart, setCountStart] = useState(false);

  // Counter animation
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countStart) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [countStart, end, duration]);

    return count;
  };

  // Intersection Observer for counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountStart(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  // Stats data
  const stats = [
    {
      icon: Calendar,
      label: "Years of Excellence",
      value: useCounter(5),
      suffix: "+",
    },
    {
      icon: Columns3,
      label: "Road Projects",
      value: useCounter(30),
      suffix: "+",
    },
    {
      icon: HousePlus,
      label: "Duplexes",
      value: useCounter(50),
      suffix: "+",
    },
    {
      icon: Wallpaper,
      label: "Interior Designing Projects",
      value: useCounter(100),
      suffix: "+",
    },
    {
      icon: Users,
      label: "Expert Team Members",
      value: useCounter(100),
      suffix: "+",
    },
    {
      icon: Smile,
      label: "Happy customers",
      value: useCounter(500),
      suffix: "+",
    },
  ];

  // Services data
  const services = [
    {
      icon: Building2,
      title: "Roads & Highways",
      description:
        "Connecting regions with world-class road infrastructure and highway construction expertise.",
      image:
        "https://images.unsplash.com/photo-1708093307958-167e327e61fa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Shield,
      title: "Bridges & Tunnels",
      description:
        "Engineering marvels that carve pathways through challenging terrains with precision.",
      image:
        "https://images.unsplash.com/photo-1679750184902-5992e3445eed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: Target,
      title: "Urban Development",
      description:
        "Transforming cityscapes with modern urban infrastructure and sustainable development.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      icon: Wallpaper,
      title: "Interior Designing",
      description:
        "Responsible resource extraction with sustainable and ethical mining practices.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Why Choose Us data
  const features = [
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "95% on-time project completion rate with meticulous planning and execution.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "ISO certified processes ensuring highest quality standards in every project.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Zero LTI record with comprehensive safety protocols and training programs.",
    },
    {
      icon: IndianRupee,
      title: "Cost Effective",
      description:
        "Optimized solutions delivering maximum value without compromising quality.",
    },
  ];

  // Projects showcase
  const projects = [
    {
      title: "National Highway Expansion",
      location: "Mandala, M.P.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1568310077736-1c216a598401?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Roads & Highways",
    },
    {
      title: "Duplexes & Residencies",
      location: "Jabalpur, M.P.",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1610402919524-dcd64aa0b17b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Urban Development",
    },
    {
      title: "Bridge Construction Project",
      location: "Central Region",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1569925457326-59b1c3611227?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Bridges & Tunnels",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Project Director, NHAI",
      content:
        "JAYSHREE has consistently delivered exceptional quality work on time. Their commitment to excellence is unmatched in the industry.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "Chief Engineer, State PWD",
      content:
        "Working with JAYSHREE has been a remarkable experience. Their technical expertise and professional approach set them apart.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      position: "Infrastructure Development Corp",
      content:
        "The team's dedication to safety and quality is exemplary. They've proven to be a reliable partner for our major projects.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Hero />
      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Image */}
            <motion.div
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                  alt="JAYSHREE Infrastructure"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-yellow-500 rounded-full p-2 sm:p-3 flex-shrink-0">
                        <Award
                          className="text-white"
                          size={20}
                          sm={{ size: 24 }}
                        />
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">
                          5+
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Years of Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-400 rounded-full blur-3xl opacity-30"
              ></motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <div>
                <motion.p
                  variants={fadeInUp}
                  className="text-xs sm:text-base text-yellow-600 font-bold uppercase tracking-widest mb-2"
                >
                  About JAYSHREE
                </motion.p>
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                >
                  Building the Nation's{" "}
                  <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                    Infrastructure
                  </span>
                </motion.h2>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-lg text-gray-700 leading-relaxed"
              >
                For over three decades, JAYSHREE has been at the forefront of
                India's infrastructure revolution. From roads to bridges,
                tunnels to urban development, we transform visions into reality
                with precision engineering and unwavering commitment.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-lg text-gray-700 leading-relaxed"
              >
                Our journey from humble beginnings to becoming one of India's
                largest EPC groups is characterized by hard work, respect for
                relationships, and a relentless drive to excel in everything we
                undertake.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="space-y-3 sm:space-y-4 pt-4"
              >
                {[
                  {
                    icon: Eye,
                    text: "Vision-driven approach to infrastructure development",
                  },
                  {
                    icon: Target,
                    text: "Excellence in engineering and project execution",
                  },
                  {
                    icon: Shield,
                    text: "Safety and sustainability at the core",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="bg-yellow-100 rounded-lg p-1.5 sm:p-2 mt-1 flex-shrink-0">
                      <item.icon
                        className="text-yellow-600"
                        size={18}
                        sm={{ size: 20 }}
                      />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-lg">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <Link to="/company">
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group min-w-[200px] justify-center"
                >
                  Learn More About Us
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={18}
                    sm={{ size: 20 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 sm:sm:w-20 sm:sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl mb-3 sm:mb-4 shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 mx-auto"
                >
                  <stat.icon
                    className="text-white"
                    size={28}
                    sm={{ size: 32 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 leading-none">
                    {stat.value}
                    <span className="text-yellow-400">{stat.suffix}</span>
                  </p>
                  <p className="text-xs sm:text-base text-gray-300 font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-base text-yellow-600 font-bold uppercase tracking-widest mb-2">
              Our Services
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Infrastructure Solutions
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
              From roads to bridges, we deliver excellence across diverse
              infrastructure domains
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg">
                    <service.icon
                      className="text-yellow-600"
                      size={20}
                      sm={{ size: 24 }}
                    />
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-yellow-600 font-semibold flex items-center gap-1 sm:gap-2 group-hover:gap-3 transition-all pt-2 text-sm">
                    Learn More
                    <ChevronRight size={16} sm={{ size: 18 }} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-base text-yellow-600 font-bold uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Excellence in Every{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Project
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-500"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-4 shadow-md mx-auto">
                  <feature.icon
                    className="text-white"
                    size={24}
                    sm={{ size: 28 }}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-base text-yellow-600 font-bold uppercase tracking-widest mb-2">
              Our Work
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming landscapes with innovative infrastructure solutions
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm flex items-center gap-1">
                      <MapPin size={12} sm={{ size: 14 }} />
                      {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 min-w-[200px] justify-center mx-auto"
              >
                View All Projects
                <ArrowRight size={18} sm={{ size: 20 }} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-base text-yellow-400 font-bold uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex gap-1 mb-3 sm:mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <Award
                        className="text-yellow-400 fill-yellow-400"
                        size={18}
                        sm={{ size: 20 }}
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/20 pt-3 sm:pt-4">
                  <p className="text-white font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Partner with JAYSHREE for world-class infrastructure solutions.
              Let's transform your vision into reality.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <Link to="/inquiryform">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-yellow-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 group min-w-[200px] justify-center"
                >
                  Get Started
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={18}
                    sm={{ size: 20 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <ContactSection />
    </div>
  );
}

export default Home;
