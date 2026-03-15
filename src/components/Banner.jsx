import React from "react";
import GoogleLogo from '../assets/GoogleLogo.png'
import AppLogo from '../assets/AppLogo.png'
import Hero from "../assets/hero.png"
import StatsInfo from "./StatsInfo";

const Banner = () => {
  return (
    <div className="my-20">
      <div className="text-center space-y-5">
        <h2 className="text-6xl font-bold">We Build <span className="text-purple-700"><br /> Productive</span> Apps</h2>
      <p className="text-lg text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex items-center justify-center gap-4">
         <button className="btn flex items-center ">
            <img className="w-6" src={GoogleLogo} alt="googleLogo" />
            <span className="text-lg font-bold">Google Play</span>
         </button>
         <button className="btn flex items-center ">
            <img className="w-6" src={AppLogo} alt="applogo" />
            <span className="text-lg font-bold">App Store</span>
         </button>
      </div>
      </div>

      <div className="flex items-center justify-center mt-6">
          <img className="w-full md:w-3xl" src={Hero} alt="Hero Image" />
      </div>
        <div className="flex justify-center items-center">
            <StatsInfo></StatsInfo>
        </div>
    </div>
  );
};

export default Banner;
