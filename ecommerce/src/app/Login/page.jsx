'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      // Handle error
      console.error(result.error);
    } else {
      // Redirect or show success message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className=" text-4xl py-4 capitalize">Welcome Back</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
      <div className="mt-4 text-center">
      <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
    >
      <span className="flex items-center">
        <FcGoogle className="text-re-500 mr-2" />
        <span className="text-gray-700">Continue with Google</span>
      </span>
    </button>

<div className=" flex justify-around text-gray-500 items-center">
    <hr className=" h- border- w-28 border-gray-600" />
    <p className="text-sm my-3 ">Or </p>

    <hr className=" h- border- w-28 border-gray-600" />
</div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <Link href="/">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button></Link>

      </form>
    </div>
  );
}
