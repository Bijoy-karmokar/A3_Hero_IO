import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getApps } from "../utility/apps";
import InstallCard from "../components/InstallCard";
import ErrorApps from "./ErrorApps"


const Installation = () => {
  const [app, setApp] = useState([]);
  const [sort, setSort] = useState(""); 
  const apps = useLoaderData();

  const handleRemove = (id) => {
    setApp((prev) => prev.filter((app) => app.id !== id));
  };

  useEffect(() => {
    const storedIds = getApps();
    const myApps = apps.filter((app) => storedIds.includes(app.id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setApp(myApps);
  }, [apps]);


  const sortedApps = [...app].sort((a, b) => {
    if (sort === "asc") return a.downloads - b.downloads;
    if (sort === "desc") return b.downloads - a.downloads;
    return 0;
  });

  return (
    <div className="bg-base-200 py-16">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
        <p className="text-lg text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Section */}
      <div className="flex justify-between items-center px-10 my-6">
        <p className="text-3xl font-semibold">
          {sortedApps.length} Apps Found
        </p>

        {/* Dropdown */}
        <details className="dropdown">
          <summary className="btn m-1">Sort By Downloads</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-56 p-2 shadow">
            
            <li>
              <a onClick={() => setSort("asc")}>
                Ascending by Downloads
              </a>
            </li>

            <li>
              <a onClick={() => setSort("desc")}>
                Descending by Downloads
              </a>
            </li>

          </ul>
        </details>
      </div>

      {/* App List */}
      <div>
        {sortedApps.length > 0 ? (
          sortedApps.map((a) => (
            <InstallCard
              key={a.id}
              app={a}
              onRemove={handleRemove}
            />
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

export default Installation;