import React from "react";

const loader = () => {
  return (
    <section className="absolute ">
      <div className="relative h-screen w-screen bg-white flex justify-center items-center">
        <div className="counter"></div>
      </div>
    </section>
  );
};

export default loader;
