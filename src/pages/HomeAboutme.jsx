import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const HomeAboutme = () => {
  return (
    <>
      <section className="pb-6 md:pb-20">
        <div className="pb-6 md:pb-20 border-b grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl mb-4">Services</h2>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl md:text-2xl lg:text-4xl mb-12">
              I offer .NET development services, including custom applications,
              API integration, and responsive web solutions. With a focus on
              scalability, security, and performance, I deliver software that
              enhances business efficiency, along with ongoing maintenance and
              support.
            </h3>
          </div>
        </div>
        <div className="pb-6 md:pb-20 border-b grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl mb-1">01</h2>
          </div>
          <div className="group col-span-2 md:col-span-1">
            <h3 className="text-2xl lg:text-4xl mb-6 lg:mb-12 flex justify-between">
              <span className="">.NET Core</span>
              <span className="icon  p-1  rounded-full relative h-8 w-8 overflow-hidden">
                <ArrowUpRightIcon className="h-6 w-6  transition-transform duration-300 ease-in-out transform group-hover:translate-x-6 group-hover:-translate-y-6" />
                <ArrowUpRightIcon className="absolute -left-6 top-full h-6 w-6  transition-transform duration-300 ease-in-out transform group-hover:translate-x-6 group-hover:-translate-y-6" />
              </span>
            </h3>
            <p className="text-xl md:text-2xl">
              build scalable, secure, and efficient applications tailored to
              your unique needs.
            </p>
          </div>
        </div>
        <div className="pb-6 md:pb-20 grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl mb-2">02</h2>
          </div>
          <div className="group col-span-2 md:col-span-1">
            <h3 className="text-2xl lg:text-4xl mb-6 lg:mb-12 flex justify-between">
              <span className="">Software Development</span>
              <span className="icon  p-1  rounded-full relative h-8 w-8 overflow-hidden">
                <ArrowUpRightIcon className="h-6 w-6  transition-transform duration-300 ease-in-out transform group-hover:translate-x-6 group-hover:-translate-y-6" />
                <ArrowUpRightIcon className="absolute -left-6 top-full h-6 w-6  transition-transform duration-300 ease-in-out transform group-hover:translate-x-6 group-hover:-translate-y-6" />
              </span>
            </h3>
            <p className="text-xl md:text-2xl">
              build scalable, secure, and efficient applications tailored to
              your unique needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAboutme;
