import React from "react";

const Home = () => {
  return (
    <>
      <section className="">
        <header className="text-5xl md:text-8xl lg:text-[12em] font-medium text-center mt-28 mb-12">
          Bhushan Bandal
        </header>
        <p className="text-2xl lg:w-2/4 font-medium text-center m-auto mb-12 ">
          I am a .NET developer with 3 years of experience, building scalable,
          high-performance applications that drive business efficiency and
          deliver exceptional user experiences.
        </p>
        <button className="bg-neutral-100 px-8 py-4 flex items-center justify-start gap-4 rounded-e-full rounded-s-full m-auto mb-12 text-2xl relative group">
          <span className="inline-block relative">
            <span className="inline-block w-4 h-4 rounded-full bg-green-400"></span>
            <span className="absolute inset-0 w-4 h-4 top-[.35em] bg-green-400 rounded-full opacity-0 group-hover:animate-ripple"></span>
          </span>
          <span className="inline-block whitespace-nowrap">
            Available for work
          </span>
        </button>
      </section>

      <section className="pb-16 mb-12 border-b">
        <img
          src="https://picsum.photos/200/300/?blur=5"
          alt="Profile"
          className="xl:w-full xl:h-[50em] rounded-[3em]"
        />
      </section>
    </>
  );
};

export default Home;
