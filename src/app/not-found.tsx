import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-7xl font-extrabold text-blue-900 drop-shadow-md">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
