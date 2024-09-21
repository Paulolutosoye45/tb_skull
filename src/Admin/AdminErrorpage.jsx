import { Link, useRouteError } from "react-router-dom";

export default function AdminErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-5xl font-bold mb-4 text-red-500">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm italic text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/admin"
        className="mt-6 inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
      >
        Go Back to Home
      </Link>
    </div>
  );
}