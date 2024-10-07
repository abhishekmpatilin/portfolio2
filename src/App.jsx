import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Loader from "./pages/Loader";

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
      <div className="container m-auto px-4 ">
        <Loader isLoading={isLoading} />
        <Header />
        <section className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
