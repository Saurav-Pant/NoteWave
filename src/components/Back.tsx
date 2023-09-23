import React from "react";
import Link from "next/link";

type Props = {};

const Back = (props: Props) => {
  return (
    <>
      <button className="bg-white  text-black absolute top-10 left-10 px-4 py-2 rounded-lg ">
        <Link href={"/"}>Back</Link>
      </button>
    </>
  );
};

export default Back;
