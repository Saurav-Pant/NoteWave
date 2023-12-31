"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Back from "./Back";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function EditTopicForm({ id, title, description }: any) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Production
      const URL = "https://notesswave.vercel.app"
      // const URL = "http://localhost:3000"; // Deployment

      const res = await fetch(`${URL}/api/upload/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ">
      <Back />
      <form className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg sm:w-96">
        <h1 className="text-center text-2xl font-bold mb-4">Edit Topic</h1>

        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          placeholder="Topic Title"
        />

        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Topic Description"
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleSubmit}
          >
            Update Topic
          </button>
        )}
      </form>
    </div>
  );
}
