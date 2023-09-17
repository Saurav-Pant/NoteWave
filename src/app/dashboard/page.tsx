"use client";
import React from "react";
import sampleData from "./sample.json";
import Link from "next/link";

const Page: React.FC = () => {
  const handleDownloadClick = () => {};

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black  p-6">
      <button className="bg-red-800 text-white absolute top-10 left-10 px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
        <Link href={"/"}>Back</Link>
      </button>
      {sampleData.map((data, index) => (
        <div
          key={index}
          className="rounded-md p-4 mb-8 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white transition-shadow hover:shadow-white shadow-md duration-300 ease-in-out transform"
        >
          <h1 className="text-4xl font-bold mb-4">{data.notesTitle}</h1>
          <p className="text-lg mb-2">{data.notesDescription}</p>
          <p className="text-lg">Posted by: {data.personName}</p>
          <button
            className="bg-white text-black p-3 rounded-md cursor-pointer flex justify-center items-center mt-4"
            onClick={handleDownloadClick}
          >
            Download Notes
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
