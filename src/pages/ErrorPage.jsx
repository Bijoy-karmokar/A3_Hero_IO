import React from "react";
import errorPage from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 my-10 p-10">
      <img className="" src={errorPage} alt="Error" />
      <h2 className="text-4xl font-bold">OOPs,Page not found!</h2>
      <p className="text-sm text-gray-600">The page you are looking for is not available.</p>
       <Link to="/">
          <button className="px-5 py-2.5 relative rounded group text-white font-medium inline-block">
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span className="relative flex items-center text-lg">
          Go Back!
        </span>
      </button>
       </Link>
    </div>
  );
};

export default ErrorPage;
