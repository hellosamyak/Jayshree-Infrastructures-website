import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // State to control text visibility. Starts true (text visible) for initial load/fallback.
  const [showTextOverlay, setShowTextOverlay] = useState(true);

  // Function called when video has loaded enough data to play.
  const handleVideoLoad = () => {
    // If the video loads, we hide the text overlay to prioritize the video.
    setShowTextOverlay(false);
  };

  // Function called if video fails to load. (Keeps showTextOverlay true, ensuring fallback display)
  const handleVideoError = () => {
    setShowTextOverlay(true);
  };

  return (
    <div className="relative w-full pt-16 min-h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Video Element (Background) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline // Important for mobile compatibility
        onLoadedData={handleVideoLoad} // Hide text when video data is ready
        onError={handleVideoError} // Ensure text is visible if video fails
      >
        {/* Path updated to match the video in the public folder */}
        <source src="/video/background.mp4" type="video/mp4" />

        {/* Fallback for browsers that don't support video or if the source is missing */}
        <div className="w-full h-full bg-slate-900 opacity-90"></div>
      </video>

      {/* 2. Dark Overlay for Contrast (Always visible) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* 3. Animated Text Content (Overlay) - RENDERED CONDITIONALLY */}
      {showTextOverlay && (
        <motion.div
          className="text-center px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            JAYSHREE INFRASTRUCTURES
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md"
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
