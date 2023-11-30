"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }: any) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/upload/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 bg-white rounded-md shadow-md"
      >
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Topic Title"
        />

        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Topic Description"
        />

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300">
          Update Topic
        </button>
      </form>
    </div>
  );
}
