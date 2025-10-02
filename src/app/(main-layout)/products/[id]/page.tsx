import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const data = await fetch("https://dummyjson.com/products?limit=100").then(
    (res) => res.json()
  );
  return data?.products.map((pro: any) => ({
    id: pro.id.toString(),
  }));
}

const ProductDetail = async ({ params }: Props) => {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  return (
    <div className="container mx-auto min-h-[80vh] py-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-center">
          <Image
            src={data?.images[0]}
            alt={data?.title}
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
          <p className="text-gray-600 leading-relaxed">{data?.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-blue-600">
              ${data?.price}
            </span>
            <span className="text-sm text-gray-500">⭐ {data?.rating} / 5</span>
          </div>
          <button className="w-fit px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">
            Add to Cart
          </button>
          <Link
            href={"/products"}
            className="mt-4 text-blue-600 hover:underline text-sm"
          >
            Back to products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
