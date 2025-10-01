import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="lg:w-[350px] md:w-[320px] w-[300px] bg-white rounded-md shadow-lg p-8">
        <h2 className="text-center text-2xl font-bold mb-6">Login Form</h2>
        <form className="flex flex-col">
          <label className="text-sm mb-1 font-medium">Email or Phone</label>
          <input
            type="text"
            required
            className="w-full h-10 px-3 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="text-sm mb-1 font-medium">Password</label>
          <input
            type="password"
            required
            minLength={6}
            maxLength={12}
            className="w-full h-10 px-3 border border-gray-300 rounded-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <Link href="#" className="text-sm text-blue-500 mb-4 hover:underline">
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white py-2 rounded-sm font-bold uppercase hover:opacity-90 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4">
            Not a member?{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Signup now
            </Link>
          </p>
          <p className="text-center pt-6 text-blue-500 hover:underline">
            <Link href={"/"}>Back to home</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
