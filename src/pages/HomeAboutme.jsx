import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const HomeAboutme = () => {
  return (
    <>
      <section className="pb-20">
        <div className="pb-20 border-b grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl">Services</h2>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-4xl mb-12">
              I provide .NET development services, including custom
              applications, API integration, and responsive web solutions. With
              a focus on scalability, security, and performance, I deliver
              tailored software that improves business efficiency, along with
              ongoing maintenance and support for optimal performance.
            </h3>
          </div>
        </div>
        <div className="pb-20 border-b grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl">01</h2>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-4xl mb-12 flex justify-between">
              <span className="">.NET Core</span>
              <span className="">
                <ArrowUpRightIcon className="w-6 h-6" />
              </span>
            </h3>
            <p className="text-2xl">
              build scalable, secure, and efficient applications tailored to
              your unique needs.
            </p>
          </div>
        </div>
        <div className="pb-20 grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl">02</h2>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-4xl mb-12 flex justify-between">
              <span className="">Software Development</span>
              <span className="">
                <ArrowUpRightIcon className="w-6 h-6" />
              </span>
            </h3>
            <p className="text-2xl">
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
