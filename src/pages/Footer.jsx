import React from "react";

const Footer = () => {
  return (
    <>
      <div className="sticky bottom-0 bg-black h-[25em] md:h-[40em] flex flex-col justify-center">
        <div className="">
          <p className="text-2xl font-medium text-gray-600 text-center mb-6">
            Have Project in mind?
          </p>
          <a
            href=""
            className="group block text-8xl font-medium text-white text-center"
          >
            <p className="relative me-3 overflow-hidden h-32 w-full flex items-center">
              <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-96 text-6xl lg:text-9xl text-nowrap">
                Contact me
              </span>
              <span className="absolute inset-0 translate-y-96 transition-transform duration-300 ease-in-out transform group-hover:translate-y-0 text-6xl lg:text-9xl text-nowrap">
                Contact me
              </span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
