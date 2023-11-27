"use client";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen w-full">
      <h1
        className="text-4xl font-bold mb-4 animate-pulse
        text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
      >
        404 - Page Not Found
      </h1>
      <p
        className="text-lg text-gray-500 mb-4
        text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-300
        "
      >
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="px-4 py-2 bg-black text-white rounded font-bold">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
