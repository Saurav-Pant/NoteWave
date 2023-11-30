"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { saveAs } from "file-saver";
import Loading from "../loading";
import Link from "next/link";
import RemoveBtn from "../libs/Remove";



const Page: React.FC = () => {
  const [Notes, setNotes] = useState<any>([]);

  useEffect(() => {
    fetch("/api/upload")
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
        console.error("Error fetching data:", error);
      });
  }, []);

  const downloadImage = (url: any) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        saveAs(url, "image.jpg");
      });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white ">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-8">
        {Notes && Notes.Note && Array.isArray(Notes.Note) ? (
          Notes.Note.map((note: any, index: any) => (
            <div className="min-h-[60vh] bg-gray-100 p-6 text-gray-900 rounded-lg">
              <div className="flex items-center mb-6">
                <img
                  src={note.creatorImgUrl}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">{note.creator}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <img
                  src={note.fileLink}
                  alt=""
                  className="w-full h-64 object-contain object-center rounded-lg"
                />
              </div>

              <div className="mt-4">
                <p className="text-base text-gray-700 leading-relaxed text-left">
                  {note.notesDescription}
                </p>
              </div>
              <div className="mt-10 flex justify-between">
                <div>
                  <button
                    className="text-blue-500 hover:text-blue-700 bg-white py-2 px-4 rounded-lg"
                  >
                    Like 
                  </button>
                </div>
                <div>
                  <button
                    className="text-blue-500 hover:text-blue-700 bg-white py-2 px-4 rounded-lg"
                    onClick={() => downloadImage(note.fileLink)}
                  >
                    Download
                  </button>
                </div>
                <div>
                  <button
                    className="text-blue-500 hover:text-blue-700 bg-white py-2 px-4 rounded-lg" 
                  >
                    <Link
                    href={`/dashboard/${note._id}`}
                    >
                    Edit
                    </Link>
                  </button>
                </div>
                <div>
                  <button>
                    <RemoveBtn id={note._id}/>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500"><Loading/></div>
        )}
      </div>
    </div>
  );
};

export default Page;
