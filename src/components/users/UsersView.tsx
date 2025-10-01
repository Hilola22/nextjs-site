import React, { FC } from "react";

interface IProps {
  data: any[];
}

export const UsersView: FC<IProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center bg-blue-300 max-w-[100px] mx-auto rounded-2xl">Users</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((user: any) => {
          const initials =
            user.name.firstname[0].toUpperCase() +
            user.name.lastname[0].toUpperCase();

          return (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                  {initials}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 capitalize">
                    {user.name.firstname} {user.name.lastname}
                  </h2>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                <p>
                  <b>Email:</b>{" "}
                  <span className="font-medium">{user.email}</span>
                </p>
                <p>
                  <b>Phone:</b>{" "}
                  <span className="font-medium">{user.phone}</span>
                </p>
                <p>
                  <b>Address:</b>{" "}
                  <span className="font-medium">
                    {user.address.city}, {user.address.street}{" "}
                    {user.address.number}, {user.address.zipcode}
                  </span>
                </p>
              </div>
              <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
                View Profile
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
