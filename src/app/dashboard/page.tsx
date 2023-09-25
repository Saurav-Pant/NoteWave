"use client";
import React, { useState, useEffect } from "react";
import Back from "@/components/Back";
import axios from "axios";

const Page: React.FC = () => {
  const [Notes, setNotes] = useState<any>([]);

  const HandleDownloadClick = () => {};
  const HandleLogOut = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get("/api/upload")
      .then((response: any) => {
        if (Array.isArray(response.data.Note)) {
          setNotes(response.data.Note); 
        } else {
          console.error("Invalid API response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-6">
      <div className="flex justify-between">
        <Back />
        <button
          className="bg-red-800 text-white absolute top-10 right-10 px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
          onClick={HandleLogOut}
        >
          Logout
        </button>
      </div>
      {Notes.map((note: any) => (
        <div
          key={note._id}
          className="rounded-md p-4 mb-8 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white transition-shadow hover:shadow-white shadow-md duration-300 ease-in-out transform hover:rotate-1"
        >
          <h1 className="text-4xl font-bold mb-4">{note.notesTitle}</h1>
          <p className="text-lg mb-2">{note.notesDescription}</p>
          <p className="text-lg">Posted by: {note.name}</p>
          <button
            className="bg-white text-black p-3 rounded-md cursor-pointer flex justify-center items-center mt-4"
            onClick={() => HandleDownloadClick()}
          >
            Download Notes
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
