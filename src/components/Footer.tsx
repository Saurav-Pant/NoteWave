import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 font-bold text-center">
      <p>
        Made With 💗 by
        <Link href={"https://twitter.com/Saurav_Pant_"} target="_blank">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent pl-2">
            Saurav Pant
          </span>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
