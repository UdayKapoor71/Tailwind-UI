import React from "react";

export const UserName = () => {
  return (
    <div className="flex m-5">
      <div className="bg-white w-10 h-10 rounded "></div>

      <div className="w-30 min-w-28 pl-2 font-sans">
        <div className="text-white text-base font-medium">Nishyan</div>
        <div className="text-gray text-xs underline">Visit store</div>
      </div>
      <div className="flex flex-col justify-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="white"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
