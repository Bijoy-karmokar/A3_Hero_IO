import React from "react";

const StatsInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center shadow w-full p-20 text-white  bg-gradient-to-r from-blue-700 via-purple-600 to-purple-600">
    <h2 className="text-4xl font-bold mb-8">Trusted by Millions, Built for You</h2>
    <div className="stats space-x-12 md:space-x-24 lg:space-x-32">
      <div className="stat place-items-center">
        <div className="stat-title text-white text-sm">Total Downloads</div>
        <div className="stat-value text-5xl my-1">29.6M</div>
        <div className="stat-desc text-white text-sm">21% More Than Last Month</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-white text-sm">Total Reviews</div>
        <div className="stat-value text-5xl my-1">906k</div>
        <div className="stat-desc text-white text-sm">46% More Than Last Month</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-white text-sm">Active Apps</div>
        <div className="stat-value text-5xl my-1">130+</div>
        <div className="stat-desc text-white text-sm">31 More Will Launch</div>
      </div>
    </div>
    </div>
  );
};

export default StatsInfo;
