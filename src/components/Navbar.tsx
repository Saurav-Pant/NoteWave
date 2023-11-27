"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const token = Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <div className="flex justify-between items-center p-4 border-b-slate-50 border-b-2">
      <div className="text-white text-xl font-bold">
        <Link href="/">NoteWave</Link>
      </div>
      <div className="flex space-x-4 justify-between items-center">
        {userId ? (
         <div className="flex items-center">
         <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in-out mr-5">
           <Link href="/Upload">Upload</Link>
         </button>
       
         {token ? (
           <button
             className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-300 transition-colors duration-500 ease-in mr-5"
             onClick={handleLogout}
           >
             Logout
           </button>
         ) : null}
       
         <div className="">{userId ? <UserButton afterSignOutUrl="/" /> : null}</div>
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
