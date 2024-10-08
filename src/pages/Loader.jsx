import { useEffect, useRef, useState } from "react";

const Loader = () => {
  const loaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add("slide-down");
        loaderRef.current.classList.add("text-white");
      }
    }, 1000);

    const hideTimer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add("fade-out");
        setTimeout(() => setIsLoading(false), 1000);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`loader fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50 transition-all duration-1000 `}
      ref={loaderRef}
    >
      <div className="relative grid grid-cols-2 border p-4 gap-2">
        <div className="col-span-1">
          <div className="border relative w-14 h-10 text-right overflow-hidden">
            {["0", "25", "50", "75", "100"].map((value, index) => (
              <span
                key={index}
                className={`block text-3xl font-bold transition-colors duration-1000 animate-slide-up`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <span className="text-3xl font-bold">&#x25;</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black transition-transform duration-1000 transform -translate-y-full slide-down" />
    </div>
  );
};

export default Loader;
