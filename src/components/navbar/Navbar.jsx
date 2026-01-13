import React, { useState } from "react";
import logo1 from "../../assets/img/logo1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rate", link: "/#" },
  { id: 3, name: "Kids wear", link: "/#" },
  { id: 4, name: "Men wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const dropdownLinks = [
  { id: 1, name: "Trending products", link: "/#" },
  { id: 2, name: "Best sales", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
  { id: 4, name: "New arrivals", link: "/#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200 relative z-40">

      {/* TOP NAVBAR */}
      <div className="bg-primary/40 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logo1} alt="logo" className="w-8 sm:w-9 md:w-10" />
            <span className="font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
              LUKASON
            </span>
          </a>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* DESKTOP SEARCH */}
            <div className="relative hidden sm:block group">
              <input
                type="text"
                placeholder="Search here"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border px-4 py-1 focus:outline-none dark:bg-gray-800"
              />
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

             {/* order button */}
                    <button onClick={()=>alert("ordering not available yet")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                         <span  className='group-hover:block hidden  transition-all duration-200'>Order</span>
                         <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>

            {/* DARK MODE */}
            <DarkMode />

            {/* MOBILE MENU ICON */}
            <FaBars
              className="text-2xl cursor-pointer sm:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex justify-center">
        <ul className="flex items-center gap-4">
          {menu.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="px-4 hover:text-primary">
                {item.name}
              </a>
            </li>
          ))}

          {/* DROPDOWN */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1 py-2">
              Trending
              <FaCaretDown className="group-hover:rotate-180 duration-200" />
            </div>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-md rounded-md w-48">
              {dropdownLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block px-4 py-2 hover:bg-primary/20"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>
      {/* MOBILE MENU */}
{open && (
  <div className="sm:hidden bg-white dark:bg-gray-900 shadow-lg rounded-xl mx-4 mt-2 overflow-hidden">

    {/* MOBILE SEARCH */}
    <div className="p-4 border-b dark:border-gray-700">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-full border px-4 py-2 pr-10 focus:outline-none dark:bg-gray-800 dark:border-gray-600"
        />
        <IoMdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    {/* MOBILE LINKS */}
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {menu.map((item) => (
        <li key={item.id}>
          <a
            href={item.link}
            onClick={() => setOpen(false)}
            className="
              block px-4 py-3
              text-gray-700 dark:text-gray-200
              hover:bg-primary hover:text-white
              transition-all duration-200
            "
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
      
    </div>
  );
};

export default Navbar;
