import React from "react";
import WorkCard from "./Cards.jsx";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import data from "../assets/data/projects.js";
const Cardcarousel = () => {
  const projects = data;

  const boxRef = React.useRef(null); // Create a reference to the element with the id "row"
  React.useEffect(() => {
    boxRef.current = document.querySelector("#row");
  }, []);

  //Button hooks
  const [leftLimit, setLeftLimit] = React.useState(true); // Set the initial state for the left limit
  const handleLeftLimit = () => setLeftLimit(!leftLimit); // Function to toggle the left limit
  const [rightLimit, setRightLimit] = React.useState(false); // Set the initial state for the right limit
  const handleRightLimit = () => setRightLimit(!rightLimit); // Function to toggle the right limit

  //Left Button onclick function
  const btnpressprev = () => {
    let width = boxRef.current.clientWidth; // Get the width of the element with the id "row"
    if (boxRef.current.scrollLeft - width <= 0) {
      // If the element has been scrolled all the way to the left, toggle the left limit
      handleLeftLimit();
    }
    if (rightLimit) {
      // If the right limit is set, toggle it
      handleRightLimit();
    }
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width; // Scroll the element with the id "row" to the left
  };

  //Right Button onclick function
  const btnpressnext = () => {
    let width = boxRef.current.clientWidth;
    if (boxRef.current.scrollLeft + width * 2 >= boxRef.current.scrollWidth) {
      handleRightLimit();
    }
    if (leftLimit) {
      handleLeftLimit();
    }
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
  };

  return (
    <div className="relative overflow-hidden flex items-center  ">
      {/*If the left limit is set, don't render the left button*/}
      {leftLimit ? (
        <></>
      ) : (
        // Otherwise, render the left button
        <button
          className="z-[1] absolute h-full w-16 text-5xl text-transparent hover:text-white duration-500 bg-gradient-to-r from-black"
          onClick={btnpressprev}
        >
          <FaCaretLeft />
        </button>
      )}
      <div id="row" className="px-[15px] flex overflow-x-hidden scroll-smooth">
        {projects.map((item, index) => (
          <WorkCard image={item.image} name={item.name} github={item.github} />
        ))}
      </div>
      {rightLimit ? (
        <></>
      ) : (
        <button
          className="z-[1] absolute right-0 h-full w-16 text-5xl text-transparent hover:text-white duration-500 bg-gradient-to-l from-black items-center flex justify-end"
          onClick={btnpressnext}
        >
          <FaCaretRight />
        </button>
      )}
    </div>
  );
};

export default Cardcarousel;
