"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMore = ({ id }: { id: number }) => {
  const router = useRouter();
    return (
      <>
        <button
          onClick={() => router.push(`/users/${id}`)}
          className="mt-4 mb-4 w-[90%] mx-auto block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
        >
          View Profile
        </button>
      </>
    );
};

export default SeeMore;
