import React from "react";

const Hero = () => {
  return (
    <>
      <section className="pb-6 md:pb-20">
        <div className="">
          <header className="text-5xl md:text-8xl lg:text-[10em] text-center mt-6 md:mt-20 mb-12">
            Bhushan Bandal
          </header>
          <p className="text-xl md:text-2xl lg:w-2/4 text-center m-auto mb-12 ">
            I am a .NET developer with 3 years of experience, building scalable,
            high-performance applications that drive business efficiency and
            deliver exceptional user experiences.
          </p>
          <button className=" bg-neutral-100 px-8 py-4 flex items-center justify-start gap-4 rounded-e-full rounded-s-full m-auto mb-12 text-2xl relative group ">
            <span className="inline-block relative">
              <span className="inline-block w-4 h-4 rounded-full bg-green-400"></span>
              <span className="absolute inset-0 w-4 h-4 top-[.35em] bg-green-400 rounded-full opacity-0 group-hover:animate-ripple"></span>
            </span>
            <span className="relative me-3 overflow-hidden h-8 w-48 flex items-center">
              <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-8 text-2xl text-nowrap">
                Available for work
              </span>
              <span className="absolute inset-0 translate-y-8 transition-transform duration-300 ease-in-out transform group-hover:translate-y-0 text-2xl text-nowrap">
                Available for work
              </span>
            </span>
          </button>
        </div>
      </section>

      <section className="block pb-20 border-b">
        <div className="">
          <img
            src="https://picsum.photos/200/300/?blur=5&random=5"
            alt="Profile"
            className="w-full h-60 md:h-96 xl:h-[50em] rounded-2xl object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
