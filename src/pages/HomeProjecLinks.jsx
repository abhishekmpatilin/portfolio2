import React from "react";
import { Link } from "react-router-dom";

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
      <section className="pb-20 border-b">
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl">Featured work</h3>
            <button
              className="bg-neutral-100 px-8 py-2 text-xl rounded-e-full rounded-s-full "
              type="button"
            >
              <Link to="/work">
                <span className="inline-block whitespace-nowrap">
                  All Projects
                </span>
              </Link>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
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

export default HomeProjecLinks;
