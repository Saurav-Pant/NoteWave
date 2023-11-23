"use client";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import Back from "@/components/Back";


const RegisterPage: React.FC = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("/api/users/Register", {
        username,
        email,
        password,
      });
  
      if (response.status === 200) {
        router.push("/Login");
        console.log("Registration successful!");
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center  relative">
       <Back/>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-transparent bg-clip-text">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">
              UserName
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your name"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-300 text-sm">
            Already have an account?{" "}
            <Link href={"/Login"} className="text-indigo-600">
              Log In
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <Link href={"/sign-up"}>
          <button className="mt-2 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
            Sign In with Google
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
