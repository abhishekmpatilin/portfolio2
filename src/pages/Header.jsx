import { Bars2Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, menuState] = useState(false);

  const changeMenu = () => {
    menuState(!menu);
  };

  return (
    <div className="relative flex items-center justify-between py-4">
      <Link to="/" className="logo">
        <p className="m-0 text-xl font-medium p-4">Bhushan Bandal</p>
      </Link>

      <div
        className={`absolute top-full left-0 w-full bg-primary transition-all duration-500 ease-in overflow-hidden ${
          menu ? "h-80" : "h-0"
        } sm:inline-block sm:relative sm:w-auto sm:h-auto sm:opacity-100 sm:overflow-visible sm:max-h-none`}
      >
        <ul className="mb-6 sm:flex sm:items-center sm:mb-0 sm:gap-4">
          <li className="nav-item text-center">
            <Link
              to="work"
              className="group relative inline-block nav-link p-2 text-5xl font-medium sm:text-xl sm:font-normal transition-all duration-500 ease-in-out transform opacity-100"
            >
              <span
                className={`block overflow-hidden max-h-0 transform transition-[max-height] duration-500 ease-in-out delay-500 ${
                  menu ? "max-h-20" : "max-h-0"
                }`}
              >
                Work
              </span>

              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link
              to="about"
              className="group relative inline-block nav-link p-2 text-5xl font-medium sm:text-xl sm:font-normal transition-all duration-300 ease-in-out transform opacity-100"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4 sm:hidden">
          <a href="#" className="sociallink">
            Linkedin
          </a>
          <a href="#" className="sociallink">
            Twitter
          </a>
          <a href="#" className="sociallink">
            Instagram
          </a>
        </div>
      </div>

      <button
        className="menuButton p-4 sm:hidden"
        onClick={changeMenu}
        title="menuButton"
        type="button"
      >
        <Bars2Icon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Header;
