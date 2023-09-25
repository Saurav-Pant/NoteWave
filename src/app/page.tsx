import React from "react";
import Navbar from "@/components/Navbar";

type Props = {};

const Page = (props: Props) => {


  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[70vh] text-white">
        <div className="text-6xl font-semibold mb-4 text-center">
          <span
            className="bg-gradient-to-tl from-slate-200 via-gray-400 to-white text-transparent bg-clip-text"
            style={{ WebkitBackgroundClip: "text" }}
          >
            Share Knowledge With NoteWave
          </span>
        </div>
        <div className="text-lg opacity-75 text-center">
          Cultivate knowledge-sharing excellence with NoteWave, where notes
          converge, fostering <br /> discovery and collaboration. Elevate your
          learning experience today
        </div>
      </div>
    </div>
  );
};

export default Page;
