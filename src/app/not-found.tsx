import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-l from-slate-800 to bg-purple-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-tl from bg-slate-200 to bg-white text-transparent bg-clip-text">
          404 Not Found
        </h1>
        <button className="p-2 mt-6 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white rounded-md">
          <Link href={"/"}>Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
