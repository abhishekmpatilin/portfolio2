import React from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "../components/animatedButton";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const HomeProjecLinks = () => {
  const projects = [
    {
      id: 1,
      name: "EKMS",
      tags: ["User management", "API Development"],
      img: "https://picsum.photos/200/300/?blur=5&random=1",
    },
    {
      id: 2,
      name: "Jclient",
      tags: ["HSM management", "API Development"],
      img: "https://picsum.photos/200/300/?blur=5&random=2",
    },
    {
      id: 3,
      name: "ADV",
      tags: ["Yokenizatiton management", "API Development"],
      img: "https://picsum.photos/200/300/?blur=5&random=3",
    },
    {
      id: 4,
      name: "Sign Gateway",
      tags: ["PDF manipulation", "API Development"],
      img: "https://picsum.photos/200/300/?blur=5&random=4",
    },
  ];
  return (
    <>
      <section className="pb-6 md:pb-20 border-b">
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl">Featured work</h3>
            {/* <AnimatedButton text="All Projects" link="/work" /> */}
            <button className="group bg-neutral-100 px-8 py-2 text-xl rounded-full text-center">
              <span className="relative me-3 overflow-hidden h-7 w-28 md:w-44 flex items-center">
                <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-8 text-xl md:text-2xl">
                  All Projects
                </span>
                <span className="absolute inset-0 translate-y-8 transition-transform duration-300 ease-in-out transform group-hover:translate-y-0 text-xl md:text-2xl">
                  All Projects
                </span>
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project) => {
              return (
                <div key={project.id} className="col-span-2 sm:col-span-1 mb-2">
                  <Link to={`/project/${project.id}`} className="group">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="block rounded-2xl w-full h-60 md:h-[24em] mb-8"
                    />
                    <p className="relative me-3 overflow-hidden h-8 w-40 flex items-center">
                      <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-8 text-xl md:text-2xl text-nowrap">
                        {project.name}
                      </span>
                      <span className="absolute inset-0 translate-y-8 transition-transform duration-300 ease-in-out transform group-hover:translate-y-0 text-xl md:text-2xl text-nowrap">
                        {project.name}
                      </span>
                    </p>
                    <p className="text-xl md:text-2xl text-gray-400">
                      {project.tags[0]}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProjecLinks;
