"use client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export default function RemoveBtn({ id }: any) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    // Production
    const URL = "https://notesswave.vercel.app";
    // const URL = "http://localhost:3000"; // Deployment

    if (confirmed) {
      const res = await fetch(`${URL}/api/upload?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400 hover:text-red-500">
      <FaTrash />
    </button>
  );
}
