import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
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
      <section className="pb-12">
        <div className="">
          <header className="text-5xl md:text-8xl lg:text-[10em] text-center mt-20 mb-12">
            Work
          </header>
          <p className="text-2xl lg:w-2/4 text-center m-auto mb-12 flex items-center justify-center gap-2">
            2021 <span className="inline-block h-1 w-8 bg-black"></span> Present
          </p>
        </div>
      </section>
      <section className="pb-6 md:pb-20">
        <div className="mt-12">
          <div className="pb-6 md:pb-20  grid grid-cols-2 gap-8">
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

export default Work;
