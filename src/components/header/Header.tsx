"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#155dfc] text-white">
      <nav className="container mx-auto min-h-[30px]">
        <div className="flex justify-between items-center py-5">
          <span>
            <Link href="/" className="text-[22px] font-bold">
              LOGO
            </Link>
          </span>

          <div className="hidden md:flex gap-7 items-center">
            <ul className="flex gap-6 text-[18px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/users">Users</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
            </ul>
            <button className="flex items-center gap-2 px-5 py-[6px] bg-white text-[18px] text-[#0b43bd] rounded-2xl">
              <Link href="/login">Login</Link> <CiLogin size={20} />
            </button>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-5 py-6">
            <hr />
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 text-lg"
            >
              Home
            </Link>
            <Link
              href="/users"
              onClick={() => setIsOpen(false)}
              className="px-4 text-lg"
            >
              Users
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="px-4 text-lg"
            >
              Products
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 text-lg"
            >
              Login <CiLogin size={20} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
