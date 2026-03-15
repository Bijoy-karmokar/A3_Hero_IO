import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github } from "lucide-react";

const Navbar = () => {
    const links = <>
        <li><NavLink className={({isActive})=>isActive ? "underline text-purple-700" : ""} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive ? "underline text-purple-700" : ""} to='/apps'>Apps</NavLink></li>
        <li><NavLink className={({isActive})=>isActive ? "underline text-purple-700" : ""} to='/install'>Installation</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {
            links
          }
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1">
          <img className="w-10" src={logo} alt="Hero" />
          <p className="text-2xl font-bold uppercase text-purple-700">
            Hero.io
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium px-1">
         {
            links
         }
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <Link to="https://github.com" className="relative flex items-center text-lg"><Github/> Contribute</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
