"use client"
import Link from "next/link";
import React, { useState } from "react";

interface UserRegistration {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        } as UserRegistration),
      });

      if (response.ok) {
        console.log("Login successful!");
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black relative">
      <button className="bg-red-800 text-white absolute top-10 left-10 px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
        <Link href={"/"}>Back</Link>
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Welcome Back!</h2>
        <div>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button" // Use type="button" to prevent form submission
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link href={"/Register"} className="text-indigo-600 pl-2">
              Register
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

export default LoginPage;
