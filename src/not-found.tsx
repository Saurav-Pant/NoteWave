"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 animate-pulse
        text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-gray-500 mb-4
        text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-300
        "
      >
        The page you are looking for does not exist.
      </motion.p>
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 bg-black text-white rounded font-bold"
        >
          Home
        </motion.button>
      </Link>
    </div>
  );
};

export default NotFound;