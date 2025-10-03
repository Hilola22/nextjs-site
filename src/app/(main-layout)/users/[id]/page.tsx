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
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("fetch failed");

    const product = await res.json().catch(() => null);

    if (!product) {
      return {
        title: "Product not found",
        description: "No product information available",
      };
    }

    return {
      title: `${product?.title} | Product`,
      description: product?.description
        ? String(product.description).slice(0, 160)
        : "Product page",
    };
  } catch {
    return {
      title: "Product not found",
      description: "No product information available",
    };
  }
}

export async function generateStaticParams() {
  const data: any[] = await fetch("https://fakestoreapi.com/products?limit=100")
    .then((res) => res.json())
    .catch(() => []);
  return data.map((p) => ({ id: String(p.id) }));
}

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;

  let data: any = null;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      notFound();
    }

    data = await response.json().catch(() => null);

    if (!data) {
      notFound();
    }
  } catch (err) {
    console.error("Product fetch/parse error:", err);
    notFound();
  }

  return (
    <div className="container mx-auto min-h-[80vh] py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl border border-gray-200">
        <div className="flex gap-6">
          <img
            src={data.image}
            alt={data.title}
            className="w-48 h-48 object-contain"
          />
          <div>
            <h1 className="text-2xl font-semibold">{data.title}</h1>
            <p className="text-gray-600 mt-2">{data.description}</p>
            <p className="text-xl font-bold mt-4">${data.price}</p>
            <Link
              href="/products"
              className="inline-block mt-6 px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
