import React from "react";
import Cardcarousel from "./Cardcarousel.jsx";
const Work = () => {
  return (
    <div
      name="work"
      className="transition ease-in-out delay-150 w-full max-w-[1000px] mx-auto z-0 my-28 md:h-screen text-gray-300"
    >
      <div className="max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-14">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#2ea6ce]">
            Work
          </p>
        </div>
        <Cardcarousel />
      </div>
    </div>
  );
};

export default Work;
