"use client";

import React, {useState } from "react";
import Back from "@/components/Back";
import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";


const Page: React.FC = () => {
  const [notesTitle, setNotesTitle] = useState<string>("");
  const [notesDescription, setNotesDescription] = useState<string>("");
  const [fileLink, setFileLink] = useState<string>();

  const router = useRouter();

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

  const handleSubmit = async () => {
    try {
      if (!notesTitle || !notesDescription || !fileLink) {
        alert("Please provide both Content and fileLink before submitting.");
        return;
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notesTitle,
          fileLink,
          notesDescription,
        }),
      });

      if (response.ok) {
        router.push("/Dashboard");
      } else {
        alert(`Submission failed. Status: ${response.status}`);
      }
    } catch (error: any) {
      alert(`Error during submission: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center  h-screen">
      <Back />
      <h1 className="text-transparent bg-gradient-to-br from-red-800 to-blue-600 bg-clip-text text-3xl sm:text-5xl font-bold mb-4">
        Upload Notes
      </h1>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-800 p-6 rounded-md shadow-md mb-6 sm:w-96">
        <form>
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
          <div>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res: any) => {
                console.log("Url: ", res[0].url);
                setFileLink(res[0].url);
                console.log(res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
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
