import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Loader from "./pages/Loader";
import Footer from "./pages/Footer";
import Project from "./pages/project";
import ResetScroll from "./components/ResetScroll";

function App() {
  return (
    <>
      {/* <Loader /> */}
      <ResetScroll />
      <div className="relative grid grid-cols-12 bg-primary z-10">
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
    </>
  );
}

export default App;
