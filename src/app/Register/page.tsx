"use client";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";

interface UserRegistration {
  userName: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Router = useRouter();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          password,
        } as UserRegistration),
      });

      if (response.ok) {
        Router.push("/Login");
        console.log("Registration successful!");
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black relative">
      <button className="bg-red-800 text-white absolute top-10 left-10 px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
        <Link href={"/"}>Back</Link>
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              UserName
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Your name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
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
            <label htmlFor="password" className="block text-gray-600">
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
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link href={"/Login"} className="text-indigo-600">
              Log In
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <button className="mt-2 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
