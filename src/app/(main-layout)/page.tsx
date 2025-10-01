import Link from "next/link";
import React from "react";
import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Here is <span className="text-blue-500">NextJS Project</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsa!
        </p>
        <Link
          href="/login"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
          <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-400 text-sm">
            Build fast, responsive, and modern websites tailored to your needs.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
          <FaRocket className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-400 text-sm">
            Optimized solutions that ensure lightning-fast speed and efficiency.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
          <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team Support</h3>
          <p className="text-gray-400 text-sm">
            Work with a professional team dedicated to achieving your goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
