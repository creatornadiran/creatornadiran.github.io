import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*Header*/}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pl-4 pb-14">
            <p className="text-4xl font-bold inline border-b-4 border-[#2ea6ce]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/*Left Text*/}
          <div className="sm:text-right text-4xl font-bold">
            <p>Nice to meet you.</p>
          </div>
          {/*Right Text*/}
          <div>
            <p className="mt-1">
              As a 3rd-year computer engineering student, I am passionate about
              full stack web development, mobile programming, and especially
              machine learning. In my spare time, I enjoy contributing to
              open-source projects. If you have an open-source project that
              needs support, Please feel free to reach out, and let's connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
