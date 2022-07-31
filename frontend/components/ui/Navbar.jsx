import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
const Navbar = ({ toggleDrawer }) => {
  return (
    <div className="bg-slate-900 sticky w-screen h-16 grid items-center justify-center">
      <button className="grid grid-flow-col cursor-pointer" href="/">
        <h4
          onClick={() => toggleDrawer()}
          className="text-white text-2xl hover:text-orange-300 transition-colors duration-500 hover:underline underline-offset-2 border-white font-mono"
        >
          iliad
        </h4>
        <FaFeatherAlt
          className="px-2 hover:fill-orange-300 transition-colors duration-500"
          color="white"
          size="1.875rem"
        />
      </button>
    </div>
  );
};

export default Navbar;