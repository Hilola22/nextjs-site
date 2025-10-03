import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const user = await fetch(`https://fakestoreapi.com/users/${id}`).then(
      (res) => res.json()
    );

    return {
      title: `${user?.username || "User"} | User Information`,
      description: `Profile details of ${user?.username || "user"}.`,
    };
  } catch {
    return {
      title: "User not found",
      description: "No user information available",
    };
  }
}

export async function generateStaticParams() {
  const data: any[] = await fetch(
    "https://fakestoreapi.com/users?limit=100"
  ).then((res) => res.json());

  return data.map((pro) => ({
    id: pro.id.toString(),
  }));
}

export default async function UserDetail({ params }: Props) {
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
            {data?.username?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-semibold mt-4">{data?.username}</h1>
          <p className="text-gray-500 text-sm mb-4">{data?.email}</p>

          <div className="w-full text-left space-y-2 mt-6">
            <p className="text-gray-700">
              <span className="font-semibold">📞 Phone:</span> {data?.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🏙️ City:</span>{" "}
              {data?.address?.city}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📍 Address:</span>{" "}
              {data?.address?.street}, {data?.address?.number}
            </p>
          </div>
          <Link
            href="/users"
            className="mt-8 px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
