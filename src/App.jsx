import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Loader from "./pages/Loader";
import Project from "./pages/project";
import Footer from "./pages/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div className="relative grid grid-cols-12 bg-primary z-10">
        <div className="col-span-8 col-start-3 z-10 bg-primary">
          <Loader isLoading={isLoading} />
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
    </>
  );
}

export default App;
