import React from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className="m-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FiSearch className="ml-1.5 absolute text-3xl text-white" />
          <input
            type="text"
            className="h-10 flex-grow bg-transparent border border-white rounded-md
          text-white pl-10"
          />
        </div>
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default App;
