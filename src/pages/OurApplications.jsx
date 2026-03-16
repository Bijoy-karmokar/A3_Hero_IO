import { Download, Star } from "lucide-react";
import React from "react";

const OurApplications = ({ hero }) => {
  const { companyName, image, downloads, ratingAvg } = hero || {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-5 ">
        <img src={image} alt="Heros" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{companyName}</h2>
        <div className="card-actions justify-between">
          <button className="btn btn-soft btn-success text-lg">
            <Download />
            {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
              downloads,
            )}
          </button>
          <button className="btn btn-soft btn-error text-lg">
            <Star /> {ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurApplications;
