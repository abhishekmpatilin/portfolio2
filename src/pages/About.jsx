import React from "react";

const About = () => {
  return (
    <>
      <section className="pb-20 border-b">
        <div className="grid grid-cols-2 mt-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl">About Me</h2>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-4xl mb-12">
              A multi-disciplinary .NET developer with a background in software
              engineering and a passion for solving complex challenges. I've had
              over three years of experience and hold a degree in software
              development.
            </h3>
            <div className="stats grid grid-cols-4">
              <div className="col-span-1"></div>
              <div className="col-span-3">
                <div className="flex items-start justify-start gap-4 border-t mb-12 pt-6 ">
                  <p className="text-8xl font-semibold">6</p>
                  <p className="text-gray-500 text-xl mt-3">
                    Completed projects
                  </p>
                </div>
                <div className="flex items-start justify-start gap-4 border-t mb-12 pt-6">
                  <p className="text-8xl font-semibold">3</p>
                  <p className="text-gray-500 text-xl mt-3">
                    Years of experience
                  </p>
                </div>
                <div className="flex items-start justify-start gap-4 border-t mb-12 pt-6">
                  <p className="text-8xl font-semibold">1</p>
                  <p className="text-gray-500 text-xl mt-3">
                    Awards for projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
