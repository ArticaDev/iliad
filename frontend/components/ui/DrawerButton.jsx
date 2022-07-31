import React from "react";

export function DrawerButton({ text }) {
  return (
    <button className="transition-colors duration-500 hover:text-orange-300 text-white font-mono h-20 text-2xl w-full hover:bg-slate-600">
      {text}
    </button>
  );
}