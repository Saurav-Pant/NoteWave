"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Cookies from "js-cookie";
import { useAuth } from "@clerk/nextjs";


type Props = {};

const Page = (props: Props) => {
  const token = Cookies.get("token");
  const { userId } = useAuth();


  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-[95vh] w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[70vh] text-white">
        <div className="text-3xl sm:text-7xl font-semibold mb-4 text-center">
          <span
            className="bg-gradient-to-tl from-slate-200 via-gray-400 to-white text-transparent bg-clip-text "
            style={{ WebkitBackgroundClip: "text" }}
          >
            Share Knowledge With NoteWave
          </span>
        </div>
        <div className="text-sm sm:text-lg opacity-75 text-center">
          Cultivate knowledge-sharing excellence with NoteWave, where notes
          converge, fostering <br /> discovery and collaboration. Elevate your
          learning experience today
        </div>
        <div className="mt-10 text-center">
          {token||userId ? (
            <button className="bg-white  text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out mr-5">
              <Link href="/dashboard">Dashboard</Link>
            </button>
          ) : (
            <button className="bg-white  text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out mr-5">
              <Link href="/sign-in">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
