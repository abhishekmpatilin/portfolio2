import React from "react";
import { Link, useParams } from "react-router-dom";

const Project = () => {
  const projectdetails = [
    {
      id: 1,
      name: "EKMS",
      tags: ["User management", "API Development"],
      description:
        "Enterprise Key Management System for secure user and key management.",
      client: "Jisa",
      role: "Software Developer",
      date: "February 2023",
      img: "https://picsum.photos/200/300/?blur=5",
      additionalImages: [
        "https://picsum.photos/200/300/?blur=5&random=1",
        "https://picsum.photos/200/300/?blur=5&random=2",
      ],
      summary:
        "Implemented End-To-End functionalities, actively participated in meetings, and handled project planning.",
    },
    {
      id: 2,
      name: "Jclient",
      tags: ["HSM management", "API Development"],
      description:
        "Client software for managing Hardware Security Modules (HSM) and API integrations.",
      client: "Techno",
      role: "Software Developer",
      date: "April 2022",
      img: "https://picsum.photos/200/300/?blur=5",
      additionalImages: [
        "https://picsum.photos/200/300/?blur=5&random=3",
        "https://picsum.photos/200/300/?blur=5&random=4",
      ],
      summary:
        "Integrated HSM management, provided API solutions, and ensured secure data handling.",
    },
    {
      id: 3,
      name: "ADV",
      tags: ["Tokenization management", "API Development"],
      description: "Advanced tokenization and encryption management system.",
      client: "SecureTech",
      role: "Lead Developer",
      date: "August 2021",
      img: "https://picsum.photos/200/300/?blur=5",
      additionalImages: [
        "https://picsum.photos/200/300/?blur=5&random=5",
        "https://picsum.photos/200/300/?blur=5&random=6",
      ],
      summary:
        "Developed the core API and tokenization logic for secure transactions, with a focus on performance and security.",
    },
    {
      id: 4,
      name: "Sign Gateway",
      tags: ["PDF manipulation", "API Development"],
      description:
        "A secure gateway for handling digital signatures and PDF manipulation.",
      client: "Digital Solutions",
      role: "Backend Developer",
      date: "December 2020",
      img: "https://picsum.photos/200/300/?blur=5",
      additionalImages: [
        "https://picsum.photos/200/300/?blur=5&random=7",
        "https://picsum.photos/200/300/?blur=5&random=8",
      ],
      summary:
        "Built a PDF manipulation tool for generating, signing, and validating documents using a secure API.",
    },
  ];

  const { id } = useParams(); // Access the project id from the URL params
  const project = projectdetails.find((project) => project.id === parseInt(id)); // Find the project by id

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <>
      <section className="pb-12">
        <div className="">
          <header className="text-5xl md:text-8xl lg:text-[10em] text-center mt-20 mb-12">
            {project.name}
          </header>
          <p className="text-2xl lg:w-2/4 text-center m-auto mb-12 text-gray-500">
            {project.description}
          </p>
        </div>
      </section>

      <section className="block pb-6 md:pb-20 border-b">
        <div className="">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-60 md:h-96 xl:h-[50em] rounded-2xl"
          />
        </div>
      </section>

      <section className="pb-6 md:pb-20 border-b">
        <div className="grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl mb-4">Summary</h2>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl md:text-4xl mb-6 lg:mb-12">
              {project.summary}
            </h3>
            <div className="stats grid grid-cols-4">
              <div className="col-span-1"></div>
              <div className="col-span-3">
                <div className="flex items-start justify-start gap-4 border-t mb-12 pt-6 ">
                  <p className="text-2xl font-semibold">Client:</p>
                  <p className="text-gray-500 text-xl">{project.client}</p>
                </div>
                <div className="flex items-center justify-start gap-4 border-t mb-12 pt-6">
                  <p className="text-2xl font-semibold">Role:</p>
                  <p className="text-gray-500 text-xl">{project.role}</p>
                </div>
                <div className="flex items-start justify-start gap-4 border-t mb-12 pt-6">
                  <p className="text-2xl font-semibold">Date:</p>
                  <p className="text-gray-500 text-xl">{project.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block pb-6 md:pb-20 mb-12">
        <div className="mb-6">
          <img
            src={project.additionalImages[0]}
            alt={project.name}
            className="w-full h-96 xl:h-[50em] rounded-2xl"
          />
        </div>
        <div className="mb-12">
          <img
            src={project.additionalImages[1]}
            alt={project.name}
            className="w-full h-96 xl:h-[50em] rounded-2xl"
          />
        </div>
        <div className="flex items-center justify-center mb-12">
          <button
            className="group bg-neutral-100 px-8 py-2 text-xl rounded-e-full rounded-s-full "
            type="button"
          >
            <Link to="/work">
              <span className="relative me-3 overflow-hidden h-8 w-48 flex items-center">
                <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-8 text-xl md:text-2xl text-nowrap">
                  All Projects
                </span>
                <span className="absolute inset-0 translate-y-8 transition-transform duration-300 ease-in-out transform group-hover:translate-y-0 text-xl md:text-2xl text-nowrap">
                  All Projects
                </span>
              </span>
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Project;
