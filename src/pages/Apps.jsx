import React from "react";
import { useLoaderData } from "react-router";
import OurApplications from "./OurApplications";

const Apps = () => {
  const heros = useLoaderData();
  // console.log(heros);

  return (
    <div className=" px-8 ">
      <div className="text-center my-5 space-y-3">
        <h2 className="text-4xl font-bold">Our All Applications</h2>
        <p className="text-lg text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">({heros.length}) Apps Found</p>
        <label className="input">
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
          <input type="search" required placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3 mb-10">
        {heros.map((hero) => (
          <OurApplications key={hero.id} hero={hero}></OurApplications>
        ))}
      </div>
    </div>
  );
};

export default Apps;
