import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  const renderErrorMessage = () => {
    if (!error) {
      return (
        <p className="text-gray-600">
          An unexpected error occurred. Please try again later.
        </p>
      );
    }

    if (error.message === "Failed to fetch") {
      return (
        <p className="text-gray-600">
          It seems you are not connected to the internet. Please check your
          connection and try again.
        </p>
      );
    }

    if (error.status === 404) {
      return (
        <p className="text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      );
    }

    return (
      <p className="text-gray-600">
        {error.message || "An error occurred while fetching data."}
      </p>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600">
        {error?.status || "Error"}
      </h1>
      <h2 className="text-2xl font-semibold mt-4">Something Went Wrong</h2>
      <img
        src="/error.jpg"
        alt="Error Illustration"
        className="w-80 my-6"
      />
      {renderErrorMessage()}
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
