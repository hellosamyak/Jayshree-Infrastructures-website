import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showTextOverlay, setShowTextOverlay] = useState(true);

  const handleVideoLoad = () => {
    setShowTextOverlay(false);
  };

  const handleVideoError = () => {
    setShowTextOverlay(true);
  };

  return (
    <div className="relative w-full pt-16 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Video (16:9 - hidden on mobile) */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video (9:16 portrait or fallback) */}
      <video
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
      >
        {/* Try to load a mobile-optimized vertical video first */}
        <source src="/video/background-mobile.mp4" type="video/mp4" />
        {/* Fallback to desktop video if mobile version doesn't exist */}
        <source src="/video/background.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 md:bg-black/50 pointer-events-none"></div>

      {/* Animated Text Content */}
      {showTextOverlay && (
        <motion.div
          className="text-center px-4 sm:px-6 relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-2xl leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            JAYSHREE INFRASTRUCTURES
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From Concept to Creation! Build Your Dream With Us.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
