"use client";
import React, { useRef, useState, MouseEvent } from "react";
import Back from "@/components/Back";
import axios from "axios";
import { useRouter } from "next/navigation";
import { storage } from "../../db/appwrite";
import {ID} from "appwrite"

const Page: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [notesTitle, setNotesTitle] = useState<string>("");
  const [notesDescription, setNotesDescription] = useState<string>("");
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
  
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
  
      const promise = storage.createFile(
        '653a7b686975f0c87a0a',
        ID.unique(),
        selectedFile,
        []
      );
  
      promise.then(function (response) {
          console.log(response); 
      }, function (error) {
          console.log(error); 
      });
    } else {
      setSelectedFileName(null);
    }
  };
  
  
  const handleNotesTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotesTitle(event.target.value);
  };

  const handleNotesDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNotesDescription(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/upload", {
        name,
        notesTitle,
        notesDescription,
      });

      if (response.status === 200) {
        router.push("/dashboard");
        console.log("Registration successful!");
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center  h-screen">
      <Back />
      <h1 className="text-transparent bg-gradient-to-br from-red-800 to-blue-600 bg-clip-text text-5xl font-bold mb-4">
        Upload Notes
      </h1>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-800 p-6 rounded-md shadow-md w-96 mb-6 ">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notesTitle" className="block text-gray-300">
              Notes Title
            </label>
            <input
              type="text"
              id="notesTitle"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter notes title"
              value={notesTitle}
              onChange={handleNotesTitleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notesDescription" className="block text-gray-300">
              Notes Description
            </label>
            <textarea
              id="notesDescription"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter notes description"
              value={notesDescription}
              onChange={handleNotesDescriptionChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fileInput" className="block text-gray-300">
              Upload a File
            </label>
            <button
              className="bg-white text-black p-2 rounded-md cursor-pointer"
              onClick={handleButtonClick}
            >
              {selectedFileName ? selectedFileName : "Select a File"}
            </button>
            <input
              type="file"
              id="uploader"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
          <button
            type="button"
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
