import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({ text, link }) => {
  return (
    <button className="relative overflow-hidden bg-neutral-100 px-8 py-2 text-xl rounded-e-full rounded-s-full ">
      <Link to={link}>
        <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ease-in-out default-text">
          {text}
        </span>
        <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-500 ease-in-out hover-text">
          {text}
        </span>
      </Link>
    </button>
  );
};

export default AnimatedButton;
