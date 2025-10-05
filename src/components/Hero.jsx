import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // State to control the visibility of the text overlay.
  // Text will appear after the video has started loading or if it fails.
  const [showTextOverlay, setShowTextOverlay] = useState(false);

  // When the video data is loaded, show the text.
  const handleVideoLoad = () => {
    setShowTextOverlay(true);
  };

  // If the video fails to load, still show the text content.
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

      {/* Container for the mobile video effect */}
      <div className="block md:hidden absolute inset-0 overflow-hidden bg-black">
        {/* Blurred background video to fill the space */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-110 filter blur-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>

        {/* New layout container for mobile with info sections and video placeholder */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center text-white">
          {/* Top Information Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-amber-400 drop-shadow-md">
              Pioneering Progress
            </h2>
            <p className="text-base text-gray-200 mt-2 max-w-xs mx-auto">
              Building the foundations for a brighter, more connected future
              through innovation.
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            className="relative w-full max-w-md mx-auto my-4 bg-black/20 rounded-lg shadow-2xl overflow-hidden border-2 border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            >
              <source src="/video/background.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Bottom Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-amber-400 drop-shadow-md">
              Built on Trust
            </h2>
            <p className="text-base text-gray-200 mt-2 max-w-xs mx-auto">
              Our legacy is delivering excellence and unparalleled quality,
              ensuring client satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
