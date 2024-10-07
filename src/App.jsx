import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Loader from "./pages/loader";

function App() {
  return (
    <>
      <Loader />
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
