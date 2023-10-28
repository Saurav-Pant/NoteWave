"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { storage } from "@/db/appwrite";
import { useClerk } from "@clerk/clerk-react";
import { databases } from "@/db/appwrite";

const Page: React.FC = () => {
  const [Notes, setNotes] = useState<any>([]);
  const { user } = useClerk();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await databases.listDocuments(
        "653bbbc519c2b07f6d2d",
        "653c88a8cfa2659f2ff0"
      );
      setNotes(response.documents);
      console.log(response.documents);
    };
    fetchNotes();
  }, []);

  const handleDownloadClick = async (fileId: any) => {
    const response = storage.getFileDownload("653a7b686975f0c87a0a", fileId);
    window.open(response);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-6 text-white">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-center">
        {Notes.map((note: any) => (
          <div
            key={note.$id}
            className="bg-gray-800 p-6 rounded-md text-center"
          >
            <h3 className="text-xl mb-2">{user?.fullName}</h3>

            <h3 className="text-xl mb-2">{note.notesTitle}</h3>
            <p className="text-base mb-2">{note.notesDescription}</p>
            <img
              src={note.imgURL}
              alt={note.notesTitle}
              className="h-32 w-32 object-cover mb-2 rounded-md"
            />
            <button
              onClick={() => handleDownloadClick(note.imgURL)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
