import React from "react";

export const Navbar = () => {
  return (
    <div className="shadow-md lg:col-span-10 col-span-12 h-16  flex flex-wrap items-center justify-between  p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-xl whitespace-nowrap">Home</span>
      </a>
      <div className="flex m-3 flex-col justify-center">
        <div className="bg-gray rounded-full h-10 w-10"></div>
      </div>
    </div>
  );
};
