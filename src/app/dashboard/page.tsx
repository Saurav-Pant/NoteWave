"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useClerk } from "@clerk/clerk-react";

const Page: React.FC = () => {
  const [Notes, setNotes] = useState<any>([]);
  const { user } = useClerk();

  useEffect(() => {
    fetch('/api/upload')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-6 text-white">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Notes && Notes.Note && Array.isArray(Notes.Note) ? (
          Notes.Note.map((note:any, index:any) => (
            <div key={index} className="bg-gray-800 p-6 rounded-md text-center">
              <h3 className="text-xl mb-2">{user?.fullName}</h3>
              <h3 className="text-xl mb-2">{note.notesTitle}</h3>
              <p className="text-base mb-2">{note.notesDescription}</p>
              <img
                src={note.fileLink}
                alt={note.notesTitle}
                className="h-32 w-32 object-cover mb-2 rounded-md"
              />
            </div>
          ))
        ) : (
          <div className="text-gray-500">No data available</div>
        )}
      </div>
    </div>
  );
};

export default Page;
