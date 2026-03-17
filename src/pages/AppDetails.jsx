import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {  Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getApps, savedApps } from "../utility/apps";
import Notiflix from "notiflix";

const AppDetails = () => {
  const apps = useLoaderData();
 const [isInstalled, setIsInstalled] = useState(false);
 const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    downloads,
    ratingAvg,
    reviews,
    ratings,
  } = apps || {};
  useEffect(() => {
    const storedApps = getApps();
    if (storedApps.includes(id)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsInstalled(true);
    }
  }, [id]);
  
//   console.log(apps);
 
  const sortedRating = [...ratings].reverse();

  const handleInstall=(id)=>{
       savedApps(id);
       setIsInstalled(true);
       Notiflix.Notify.success("Apps added successfully.")
  }

  return (
    <div className="px-10 my-10">
      <div className="bg-base-200 shadow-sm p-12 rounded-2xl">
         <div className="flex flex-col md:flex-row items-center gap-6">
        <div>
          <img className="rounded-xl shadow-md" src={image} alt="image" />
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold">SmPlan:{title}</h2>
            <p className="font-medium">
              Developed by{" "}
              <span className="text-purple-600">{companyName}</span>
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex gap-10">
            <div className="space-y-1">
              <Download color="green"></Download>
              <h4>Downloads</h4>
              <p className="text-3xl font-bold">
                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  downloads,
                )}
              </p>
            </div>
            <div className="space-y-1">
              <Star className="purple"></Star>
              <h4>Average Ratings</h4>
              <p className="text-3xl font-bold">{ratingAvg}</p>
            </div>
            <div className="space-y-1">
              <ThumbsUp color="purple" />
              <h4>Total Reviews</h4>
              <p className="text-3xl font-bold">
                {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                  reviews,
                )}
              </p>
            </div>
          </div>
          
            <button
              onClick={() => handleInstall(id)}
              disabled={isInstalled}
              className={`relative rounded px-5 py-2.5 overflow-hidden group mt-4 text-white transition-all duration-300 
                ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400"
                }`}
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>

              <span className="relative">
                {isInstalled
                  ? "Installed"
                  : `Install Now (${size}MB)`}
              </span>
            </button>
        
        </div>
      </div>
      </div>

  <div className="my-5 shadow-sm p-10 rounded-2xl" style={{ width: "100%", height: 300 }}>
  <h2 className="text-xl font-bold">Ratings</h2>

  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={sortedRating}
      layout="vertical"
      
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en-US',{notation:'compact'}).format(value)}/>
      <Bar dataKey="count" barSize={20} fill="orange" />
    </BarChart>
  </ResponsiveContainer>
</div>

      <div className="my-6">
        <h3 className="text-xl font-semibold">Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
