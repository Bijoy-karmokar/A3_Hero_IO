import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content rounded p-10">
        <Link to={"/"} className="flex items-center gap-1">
          <img className="w-10" src={logo} alt="Hero" />
          <p className="text-2xl font-bold uppercase text-purple-700">
            Hero.io
          </p>
        </Link>

      <nav className="grid grid-flow-col gap-5 list-none text-lg font-medium">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-purple-700" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-purple-700" : ""
            }
            to="/apps"
          >
            Apps
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-purple-700" : ""
            }
            to="/install"
          >
            Installation
          </NavLink>
        </li>
      </nav>
      <nav>
        <h2 className="text-xl text-center font-semibold mb-3">Social Login</h2>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.facebook.com/" className="text-blue-600">
            <Facebook />
          </Link>
          <Link to="https://www.youtube.com/" className="text-red-600">
            <Youtube />
          </Link>
          <Link to="https://x.com/" className="text-blue-400">
            <Twitter />
          </Link>
          <Link to="https://www.instagram.com/" className="text-red-800">
            <Instagram />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          HERO.IO.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
