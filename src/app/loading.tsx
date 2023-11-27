"use client"
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-full shadow-md p-3 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
      </div>
    </motion.div>
  );
};

export default Loading;