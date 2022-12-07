import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      name="contact"
      className="w-full pt-96 bg-gradient-to-b from-black to-[#1981b3]"
    >
      <div className="p-16 text-center text-white">
        <div className="space-between justify-center mb-4 flex">
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
        <p className="text-xl">© 2022 Nadirhan Şahin All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
