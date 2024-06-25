import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Context";

export default function Navbar() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const scrollPercent = (scrollTop / (fullHeight - windowHeight)) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-100 w-full p-4 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 relative">
        <h2 className="text-black text-2xl font-bold hover:text-orange-700">Food Recipe App</h2>
        <form onSubmit={handleSubmit} className="flex flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Type a recipe"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-full border-none focus:outline-none bg-gray-200 text-black placeholder-gray-500"
          />
        </form>
        <div className="h-1 w-full bg-orange-700 absolute bottom-0 left-0 top-14"
             style={{ width: `${scrollPercent}%` }}></div>
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
