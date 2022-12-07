import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClickNav = () => setNav(!nav);
  return (
    <div className="bg-gradient-to-b from-black fixed w-full z-[2] h-[80px] flex justify-between items-center px-4 text-[#e5e5e5] md:justify-start">
      {/*Padding - for mobile view*/}
      <div className=""></div>
      {/*desktop view*/}
      {/*Navigation Links*/}
      <ul className="hidden md:flex text-sm">
        <li className="px-5 font-extrabold	hover:text-[#b3b3b3] duration-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="font-extrabold hover:text-[#b3b3b3] duration-400">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-extrabold hover:text-[#b3b3b3] duration-400">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-extrabold hover:text-[#b3b3b3] duration-400">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="font-extrabold hover:text-gray-400 duration-400">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="font-extrabold hover:text-gray-400 duration-400">
          <a
            href="https://docs.google.com/spreadsheets/d/1UJYWw5iV5pKxG2nXIu7yecijUSgetM2MRe45p2D4ipQ/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            smooth={true}
            duration={500}
          >
            Certificates
          </a>
        </li>
      </ul>
      {/*mobile view*/}
      {/*hamburger menu*/}
      <div onClick={handleClickNav} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClickNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClickNav}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClickNav}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClickNav} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClickNav}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            href="https://docs.google.com/spreadsheets/d/1UJYWw5iV5pKxG2nXIu7yecijUSgetM2MRe45p2D4ipQ/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            smooth={true}
            duration={500}
          >
            Certificates
          </a>
        </li>
      </ul>
      {/*desktop view*/}
      <div className="w-full space-between justify-end hidden md:flex">
        <div>
          <a
            href="https://tr.linkedin.com/in/sahinadirhan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="ml-5">
          <a
            href="https://twitter.com/sahinadirhan"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={30} />
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://github.com/creatornadiran"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
