import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found.</h3>
      <p className="text-lg text-gray-600 max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <NavLink
        to="/admin"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        Go to Homepage
      </NavLink>
    </div>
  );
}

export default NotFound;
