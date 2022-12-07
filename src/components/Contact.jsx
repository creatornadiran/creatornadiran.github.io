import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen flex justify-center p-4">
      <form
        action="https://getform.io/f/35c236df-34f5-4e5f-a072-abffe25e701d"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        {/*Header*/}
        <div className="pb-14 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#2ea6ce] text-gray-300">
            Contact
          </p>
        </div>
        {/*Inputs*/}
        <input
          className="rounded-xl p-2 bg-[#bad9e8]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="rounded-xl my-4 p-2 bg-[#bad9e8]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="rounded-xl p-2 bg-[#bad9e8]"
          name="message"
          placeholder="Message"
          rows="8"
        ></textarea>
        {/*Button*/}
        <button className="text-black text-xl bg-white hover:bg-white/[.7] rounded-xl font-bold px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
