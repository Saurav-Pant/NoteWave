import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showSplash1, setShowSplash1] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash1(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="">
          {showSplash1 && (
            <div className="flex justify-center mb-6">
              <input
                type="text"
                placeholder="Search for a college..."
                className="border border-gray-300 rounded-lg py-2 px-4"
              />
            </div>
          )}
          <motion.div
            className="grid gap-6 lg:grid-cols-3 md:grid-cols-2"
            style={{
              minHeight: "100vh",
              background: "#f9f9f9",
              padding: "20px",
              boxSizing: "border-box",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 h-60 flex flex-col justify-center hover:shadow-xl transition-shadow duration-300"
                style={{ opacity: 0.7 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  className="text-xl font-semibold mb-2 bg-gray-300  h-4"
                  style={{  width: "70%",borderRadius:"3px" }}
                ></h2>
                <p
                  className="bg-gray-300 h-4 mt-2"
                  style={{ width: "30%" ,borderRadius:"3px"}}
                ></p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;