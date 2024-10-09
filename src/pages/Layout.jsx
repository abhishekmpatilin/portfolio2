import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Footer from "./Footer";
import Project from "./project";

const Layout = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-y-auto">
        <div className="relative grid grid-cols-12 bg-primary z-10 ">
          <div className="col-span-12 px-12 lg:pz-0 lg:col-span-8 lg:col-start-3 z-10 bg-primary">
            <Header />
            <section className="p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project/:id" element={<Project />} />
              </Routes>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
