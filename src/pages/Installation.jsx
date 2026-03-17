import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getApps } from "../utility/apps";
import InstallCard from "../components/InstallCard";

const Installation = () => {
  const [app, setApp] = useState([]);
  const apps = useLoaderData();
  
  const handleRemove = (id) => {
  setApp(prev => prev.filter(app => app.id !== id));
};
  // console.log(apps);
  useEffect(() => {
    const appsData = getApps();
    // console.log(appsData);
    const myApps = apps.filter((app) => appsData.includes(app.id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setApp(myApps);
  }, []);
  // console.log(app);

  return (
    <div className="bg-base-200 py-16">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
        <p className="text-lg text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center px-10">
        <p className="text-3xl font-semibold">{app.length} Apps Found</p>
        <details className="dropdown">
          <summary className="btn m-1">Sort By Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {app.map((a) => (
          <InstallCard key={a.id} app={a} onRemove={handleRemove}></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
