import React from "react";
import TrendCard from "./TrendCard";
import { Link } from "react-router";

const Trending = ({ heros }) => {


  return (
    <div>
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Trending Apps</h3>
        <p className="text-sm font-medium text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-8 my-6">
        {heros.slice(0, 8).map((hero) => (
            <TrendCard key={hero.id} hero={hero}></TrendCard>
          ))}
      </div>

      <div className="flex items-center justify-center my-5">
       <Link to="/apps">
        <button
          className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative flex items-center text-lg">Show All</span>
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Trending;
