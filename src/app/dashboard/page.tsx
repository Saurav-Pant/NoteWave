import Dashboard from "@/components/Dashboard";
import React from "react";

type Props = {};

export const metadata = {
  title: "NoteWave | Dashboard",
};

const page = (props: Props) => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
