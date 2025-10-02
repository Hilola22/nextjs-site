import React, { FC } from "react";
import SeeMore from "./SeeMore";

interface IProps {
  data: any[];
}

export const ProductView: FC<IProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center bg-blue-300 max-w-[150px] mx-auto rounded-2xl">
        Products
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="product-card bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            <div className="bg-gray-100 flex items-center justify-center h-[250px]">
              <img
                className="w-[160px] h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-2 min-h-[48px]">
                {item.title}
              </h2>
              <p className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                {item.category}
              </p>

              {item.price && (
                <p className="mt-3 text-lg font-bold text-blue-600">
                  ${item.price}
                </p>
              )}
            </div>
              <SeeMore id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
