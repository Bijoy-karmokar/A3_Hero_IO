import { Download, Star } from "lucide-react";
import React from "react";
import { removedApps } from "../utility/apps";

const InstallCard = ({ app, onRemove }) => {
  const { id, image, title, downloads, ratingAvg, size } = app || {};

  const handleRemovedApp = () => {
    removedApps(id);   
    onRemove(id);   
  };

  return (
    <div className="shadow-sm rounded-2xl mb-5 mx-10 my-5 bg-white">
      <div className="flex justify-between items-center p-4">
        
        {/* Left Section */}
        <div className="flex gap-3 items-center">
          <img className="w-16 h-16 rounded-lg object-cover" src={image} alt={title} />

          <div className="space-y-1">
            <h2 className="text-xl font-semibold">
              Forest: {title}
            </h2>

            <div className="flex items-center text-sm font-medium space-x-4">
              
              {/* Downloads */}
              <div className="flex items-center text-green-500 gap-1">
                <Download size={16} />
                <span>
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(downloads)}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center text-orange-400 gap-1">
                <Star size={16} />
                <span>{ratingAvg}</span>
              </div>

              {/* Size */}
              <p className="text-gray-500">{size} MB</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleRemovedApp}
          className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
          <span className="relative">Uninstall</span>
        </button>

      </div>
    </div>
  );
};

export default InstallCard;