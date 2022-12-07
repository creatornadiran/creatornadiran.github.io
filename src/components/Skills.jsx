import React from "react";
import ReactIcon from "../assets/img/react.png";
import PytorchIcon from "../assets/img/pytorch.png";
import DjangoIcon from "../assets/img/django.png";
import FutterIcon from "../assets/img/flutter.png";
import MySQLIcon from "../assets/img/mySQL.png";
import OpenCVIcon from "../assets/img/opencv.png";
import TensorflowIcon from "../assets/img/tensorflow.png";
import GoogleCloudIcon from "../assets/img/GCP.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-14">
          <p className="text-4xl font-bold inline border-b-4 border-[#2ea6ce] text-gray-300">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={ReactIcon} alt="React icon" />
            <p className="my-4 ">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="h-20 mx-auto"
              src={PytorchIcon}
              alt="Pytorch icon"
            />
            <p className="my-4 ">Pytorch</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={DjangoIcon} alt="Django icon" />
            <p className="my-4">Django</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={FutterIcon} alt="Flutter icon" />
            <p className="my-4 ">Flutter</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={MySQLIcon} alt="MySQL icon" />
            <p className="my-4 ">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="h-20 mx-auto" src={OpenCVIcon} alt="React icon" />
            <p className="my-4 ">OpenCV</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="h-20 mx-auto"
              src={TensorflowIcon}
              alt="Tensorflow icon"
            />
            <p className="my-4 ">Tensorflow</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="h-20 mx-auto"
              src={GoogleCloudIcon}
              alt="GoogleCloud icon"
            />
            <p className="my-4 ">Google Cloud ML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
