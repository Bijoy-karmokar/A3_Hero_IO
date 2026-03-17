import React, { useState } from "react";
import { useLoaderData } from "react-router";
import OurApplications from "./OurApplications";
import ErrorApps from './ErrorApps'

const Apps = () => {
  const [search, setSearch] = useState("");
  const heros = useLoaderData();

  const filterApps = heros.filter((hero) =>
    hero.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-8">
      {/* Header */}
      <div className="text-center my-5 space-y-3">
        <h2 className="text-4xl font-bold">Our All Applications</h2>
        <p className="text-lg text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search + Count */}
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">({filterApps.length}) Apps Found</p>

        <label className="input flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Apps"
            className="input-bordered"
          />
        </label>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3 mb-10">
        {filterApps.length > 0 ? (
          filterApps.map((hero) => (
            <OurApplications key={hero.id} hero={hero} />
          ))
        ) : (
          <div className="flex items-center justify-center min-w-screen">
            <ErrorApps></ErrorApps>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;