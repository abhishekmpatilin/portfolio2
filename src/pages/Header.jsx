import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
        className={`absolute top-full left-0 w-full bg-primary transition-all duration-200 ease-in-out overflow-hidden ${
          menu ? " h-52 sm:h-full" : "h-0"
        } sm:inline-block sm:relative sm:w-auto sm:h-auto sm:opacity-100 sm:overflow-visible sm:max-h-none`}
      >
        <ul className="mb-6 sm:flex sm:items-center sm:mb-0 sm:gap-4">
          <li className="nav-item text-center overflow-hidden">
            <Link
              to="work"
              className={`group relative inline-block nav-link p-2 text-5xl font-medium sm:text-xl sm:font-normal transition-transform duration-300 ease-in-out transform  ${
                menu
                  ? "translate-y-0 opacity-100 delay-200"
                  : "absolute top-full left-0 translate-y-16 opacity-0"
              }`}
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li className="nav-item text-center overflow-hidden">
            <Link
              to="work"
              className={`group relative inline-block nav-link p-2 text-5xl font-medium sm:text-xl sm:font-normal transition-transform duration-300 ease-in-out transform  ${
                menu
                  ? "translate-y-0 opacity-100 delay-200"
                  : "absolute top-full left-0 translate-y-16 opacity-0"
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4 sm:hidden">
          <a href="#" className="sociallink text-xl">
            Linkedin
          </a>
          <a href="#" className="sociallink text-xl">
            Twitter
          </a>
          <a href="#" className="sociallink text-xl">
            Instagram
          </a>
        </div>
      </div>

      <button
        className="menuButton p-4 sm:hidden transition-transform duration-300 ease-in-out"
        onClick={changeMenu}
        title="menuButton"
        type="button"
      >
        {!menu ? (
          <Bars2Icon className="h-6 w-6 transform transition-all duration-300 ease-in-out" />
        ) : (
          <XMarkIcon className="h-6 w-6 transform transition-all duration-300 ease-in-out" />
        )}
      </button>
    </div>
  );
};

export default Header;
