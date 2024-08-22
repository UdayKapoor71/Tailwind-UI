import React from "react";

export const Balance = () => {
  return (
    <div className="p-3">
      <div className="flex flex-col justify-center bg-lightgray rounded h-14  ">
        <div className="flex flex-row ">
          <div className="w-8 h-8 m-3 bg-bluegray rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="size-6 m-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white text-sm">Available credits</div>
            <div className="text-white text-sm">222.10</div>
          </div>
        </div>
      </div>
    </div>
  );
};
