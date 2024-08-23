import React from "react";
import { InformationAlert } from "./reuseable_components/InformationAlert";

export const Navbar = () => {
  return (
    <>
      <div className="shadow-md lg:col-span-10 col-span-12 h-16  flex items-center justify-between  p-8">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl ">Home</span>
        </a>

        <div className="relative w-96">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-10 p-4 ps-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-thingray shadow-md"
            placeholder="Search features, tutorials, etc..."
            required
          />
        </div>

        <div className="flex ">
          <div className="flex ">
            <div className=" flex flex-row justify-end m-2 h-10 ">
              <div className="flex text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mt-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <div className="text-base m-2 ">Need help?</div>
                <div className="border-r m-2"></div>
              </div>
            </div>
            <div className="bg-thingray m-2 rounded-full h-10 w-10 "></div>
          </div>
          <div className="bg-thingray m-2 rounded-full h-10 w-10"></div>
        </div>
      </div>
     
    </>
  );
};
