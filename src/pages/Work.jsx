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
      <section className="pb-20">
        <div className="mt-12">
          <div className="pb-20  grid grid-cols-2 gap-8">
            {projects.map((project) => {
              return (
                <div key={project.id} className="col-span-1">
                  <Link to={`/project/${project.id}`}>
                    <img
                      src={project.img}
                      alt={project.name}
                      className="block rounded-2xl w-full h-[24em] mb-8"
                    />
                    <p className="text-2xl">{project.name}</p>
                    <p className="text-2xl text-gray-400">{project.tags[0]}</p>
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
