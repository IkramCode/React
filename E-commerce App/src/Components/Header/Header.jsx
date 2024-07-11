import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">E-Commerce</h1>
          </div>
          <nav className="flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-800 ${
                  isActive ? "text-orange-600" : "text-gray-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-800 ${
                  isActive ? "text-orange-600" : "text-gray-600"
                }`
              }
            >
              Cart
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
