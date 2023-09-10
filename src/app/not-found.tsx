"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  // Define animations for the elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  // Define styles for the gradient text
  const gradientText = {
    background: "-webkit-linear-gradient(45deg, #FE6B8B, #FF8E53)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl font-semibold mb-4"
          variants={textVariants}
          style={gradientText}
        >
          404 Not Found
        </motion.h1>
        <motion.p className="text-gray-600" variants={textVariants}>
          Sorry, the page you are looking for does not exist.
        </motion.p>
        <motion.button
          className="p-2 mt-6 bg-black hover:bg-gray-700 text-white"
          variants={textVariants}
        >
          <Link href={"/"}>Back To Home</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NotFound;
