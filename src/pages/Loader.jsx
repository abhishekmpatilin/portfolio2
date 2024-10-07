import { useEffect, useRef } from "react";

const Loader = ({ isLoading }) => {
  const loaderRef = useRef(null);

  useEffect(() => {}, [isLoading]);

  return (
    <div
      className={`loader fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50 ${
        isLoading ? "block" : "hidden"
      }`}
    >
      <div className="" ref={loaderRef}></div>
    </div>
  );
};

export default Loader;
