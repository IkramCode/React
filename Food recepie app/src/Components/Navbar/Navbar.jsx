import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 w-full p-4 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <h2 className="text-black text-2xl font-bold">Food Recipe App</h2>
        <form className="flex flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Type a recipe"
            name="search"
            className="w-full p-3 rounded-full border-none focus:outline-none bg-gray-200 text-black placeholder-gray-500"
          />
        </form>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } font-bold text-lg border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favourites"}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-orange-700" : "text-gray-700"
                } font-bold text-lg border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
