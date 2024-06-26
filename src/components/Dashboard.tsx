"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { saveAs } from "file-saver";
import Loading from "../app/loading";
import Link from "next/link";
import RemoveBtn from "../app/libs/Remove";
import { useClerk } from "@clerk/nextjs";
import { FaEdit } from "react-icons/fa";
import { roboto_mono } from "../Fonts/fonts";
import { toast } from "react-hot-toast";

const Dashboard: React.FC = () => {
  const [Notes, setNotes] = useState<any>([]);
  const { user } = useClerk();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/api/upload")
      .then(handleResponse)
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleResponse = (response: Response) => {
    if (!response.ok) {
      if (response.status === 429) {
        toast.error("Rate Limit exceeded, Try again later");
      }
      setTimeout(() => {
        toast.success("Refresh and use the page");
      }, 5000); 
      
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

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
            <div
              key={index}
              className="min-h-[60vh] bg-gray-100 p-6 text-gray-900 rounded-lg"
            >
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
              <div>
                <h1
                  className={`font-bold text-3xl pt-3 ${roboto_mono.className}`}
                >
                  {note.notesTitle}
                </h1>
              </div>

              <div className="mt-4">
                <p className="text-base text-gray-700 leading-relaxed text-left">
                  {note.notesDescription}
                </p>
              </div>
              <div className="mt-10 flex justify-between">
                <div>
                  <button className="text-blue-500 hover:text-blue-700 bg-white py-2 px-4 rounded-lg">
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
                {note.creator === user?.fullName ? (
                  <>
                    <div>
                      <button className="text-blue-500 hover:text-blue-700 bg-white py-2 px-4 rounded-lg mr-5">
                        <Link href={`/dashboard/${note._id}`}>
                          <FaEdit />
                        </Link>
                      </button>
                      <button>
                        <RemoveBtn id={note._id} />
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
