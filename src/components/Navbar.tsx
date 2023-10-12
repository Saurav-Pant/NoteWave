"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
  const router = useRouter();
  const token = Cookies.get("token");
  console.log(token);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-white text-xl font-bold">
        <Link href="/">NoteWave</Link>
      </div>
      <div className="flex space-x-4">
        {token ? (
          <div>
            <button className="bg-white  text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out mr-5">
              <Link href="/Upload">Upload</Link>
            </button>
            <button
              className="bg-white  text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="bg-white  text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out">
              <Link href="/Login">Login</Link>
            </button>
            <button
              className="hover:bg-white hover:text-black  text-white font-semibold py-2 px-4 rounded-full
          transition-colors duration-500 ease-in-out"
            >
              <Link href="/Register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
