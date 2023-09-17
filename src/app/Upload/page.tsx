"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

const Page: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [notesTitle, setNotesTitle] = useState<string>("");
  const [notesDescription, setNotesDescription] = useState<string>("");
  const [name, setName] = useState<string>("John Doe"); // You can set an initial name here

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
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

  const handleSubmit = () => {
    // Handle the form submission here, e.g., send data to the server
    // You can access notesTitle, notesDescription, selectedFileName, and name here
  };

  return (
    <div className="flex justify-center flex-col items-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen">
      <button className="bg-red-800 text-white absolute top-10 left-10 px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
        <Link href={"/"}>Back</Link>
      </button>

      <h1 className="text-transparent bg-gradient-to-br from-red-800 to-blue-600 bg-clip-text text-5xl font-bold mb-4">
        Upload Notes
      </h1>
      <div className="bg-white p-6 rounded-md shadow-md w-96 mb-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
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
            <label htmlFor="notesTitle" className="block text-gray-600">
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
            <label htmlFor="notesDescription" className="block text-gray-600">
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
            <label htmlFor="fileInput" className="block text-gray-600">
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
              id="fileInput"
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