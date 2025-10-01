import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">LOGO</h2>
          <p className="text-sm">
            We provide high-quality IT services and modern solutions. Happy to
            collaborate with you!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-sky-500 transition"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DeveloperLab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
