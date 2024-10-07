import { Bars2Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, menuState] = useState(false);
  const changeMenu = () => {
    menuState(!menu);
  };

  return (
    <div className="relative flex items-center justify-between px-4">
      <Link to={"/"} className="logo">
        <p className="m-0 text-xl font-medium p-4">Bhushan Bandal</p>
      </Link>
      <div
        className={`absolute top-full w-dvw  ${
          menu ? "block" : "hidden"
        } sm:inline-block sm:relative sm:w-auto`}
      >
        <ul className={`mb-4 sm:flex sm:items-center sm:mb-0 sm:gap-4`}>
          <li className="nav-item text-center">
            <Link
              to="work"
              className="nav-link block p-4 text-5xl font-medium sm:text-xl sm:font-normal"
            >
              Work
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link
              to="about"
              className="nav-link block p-4 text-5xl font-medium sm:text-xl sm:font-normal"
            >
              About
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link
              to="contact"
              className="nav-link block p-4 text-5xl font-medium sm:text-xl sm:font-normal"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-4 sm:hidden">
          <a href="" className="sociallink">
            Linkedin
          </a>
          <a href="" className="sociallink">
            Twitter
          </a>
          <a href="" className="sociallink">
            Instagram
          </a>
        </div>
      </div>
      <button
        className="menuButon p-4 sm:hidden"
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
