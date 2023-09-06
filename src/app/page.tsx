import React from "react";
import Navbar from "@/components/Navbar";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="bg-gradient-to-l from-slate-800 to bg-purple-900 h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[70vh] text-white">
        <div className="text-6xl font-semibold mb-4 text-center bg-gradient-to-tl from bg-slate-200 to bg-white text-transparent bg-clip-text">
        Share Knowledge With NoteWave
        </div>
        <div className="text-lg opacity-75 text-center ">
        Cultivate knowledge-sharing excellence with NoteWave, where notes converge, fostering <br/> discovery and collaboration. Elevate your learning experience today
        </div>
      </div>
    </div>
  );
};

export default Page;
