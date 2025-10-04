import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// Animation Variants (you can adjust these to match your project's animations)
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ContactSection = () => {
  // Based on the provided time: Saturday, October 4, 2025 at 7:28 PM IST.
  // In a live application, you would use `new Date()` here.
  const currentTime = new Date("2025-10-04T19:28:00+05:30");
  const currentDay = currentTime.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const currentHour = currentTime.getHours(); // 24-hour format

  // Business hours: Mon-Sat (1-6), 9 AM to 6 PM (9-17)
  const isOpen =
    currentDay >= 1 && currentDay <= 6 && currentHour >= 9 && currentHour < 18;

  const contactDetails = [
    {
      id: "phone",
      icon: Phone,
      title: "Call Us",
      info: "+91 704 777 7734",
      subinfo: "Mon - Sat: 9:00 AM - 6:00 PM",
      href: "tel:+917047777734",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      info: "jayshree.infras@gmail.com",
      subinfo: "We'll respond within 24 hours",
      href: "mailto:jayshree.infras@gmail.com",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Visit Us",
      info: "Plot no. 707/5, New Shastri Nagar",
      subinfo: "Jabalpur, M.P. - 482003",
      href: `https://maps.app.goo.gl/9wM7QzyfaxtLD7bS9`,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm sm:text-base text-yellow-600 font-bold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactDetails.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <motion.div
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg group-hover:shadow-yellow-500/50"
                >
                  <contact.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-800 font-semibold mb-1">
                  {contact.info}
                </p>
                <p className="text-gray-600 text-sm">{contact.subinfo}</p>
                {contact.id === "phone" && (
                  <div
                    className={`mt-4 inline-flex items-center gap-2 text-xs font-bold py-1.5 px-3 rounded-full ${
                      isOpen
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                      }`}
                    ></span>
                    {isOpen ? "We're Open" : "Currently Closed"}
                  </div>
                )}
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
