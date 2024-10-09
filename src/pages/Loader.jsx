import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`absolute z-50 h-screen w-screen ${
        isAnimationComplete ? "bg-black animate-fadeIn text-white" : "bg-white"
      } `}
    >
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex">
          <div className="overflow-hidden">
            <div className="relative h-8 w-10 text-2xl text-right font-bold">
              <p
                className="animate-moveUpNegative"
                style={{ animationDelay: "750ms" }}
              >
                0
              </p>
              <p
                className="absolute right-0 top-full animate-moveUp"
                style={{ animationDelay: "0ms" }}
              >
                25
              </p>
              <p
                className="absolute right-0 top-full animate-moveUp"
                style={{ animationDelay: "500ms" }}
              >
                50
              </p>
              <p
                className="absolute right-0 top-full animate-moveUp"
                style={{ animationDelay: "1000ms" }}
              >
                75
              </p>
              <p
                className="absolute right-0 top-full animate-moveToZero"
                style={{ animationDelay: "3000ms" }}
              >
                100
              </p>
            </div>
          </div>
          <div className="text-2xl text-right font-bold">
            <p>&#x25;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
