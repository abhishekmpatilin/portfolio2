import { useLocation } from "react-router-dom";
import "./App.css";
import Loader from "./pages/Loader";
import Layout from "./pages/Layout";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [location]);

  return <>{loading ? <Loader /> : <Layout />}</>;
}

export default App;
