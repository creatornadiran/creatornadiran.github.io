import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen home-internal-img ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl font-bold text-white">Hi, my name is</p>
        <h1 className="text-4xl md:text-8xl font-bold text-white">
          Nadirhan Şahin
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          I'm a Computer Engineering Student
        </h2>
        {/*Button*/}
        <div className="hover:animate-pulse">
          <button
            href="/portfolio"
            className="group text-black text-xl bg-white px-6 py-3 mt-5 rounded-xl flex items-center hover:bg-white/[.7] "
          >
            <Link
              className="first-letter:ml-3 font-bold"
              to="work"
              smooth={true}
              duration={500}
            >
              View Work
            </Link>
            <HiChevronRight className="group-hover:rotate-90" />
          </button>
        </div>
        <div className="bottom_hover"></div>
      </div>
    </div>
  );
};

export default Home;
