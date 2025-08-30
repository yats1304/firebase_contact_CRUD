import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex gap-2 h-[60px] bg-white my-4 rounded-lg items-center justify-center
    text-xl font-medium"
    >
      <img src="/firebase.svg" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
