import React from "react";

export const InformationAlert = () => {
  return (
    <>
      <div className="border flex flex-col justify-center border-red bg-lightred rounded-xl lg:col-span-10 col-span-12   h-16 p-2 m-8">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            className="size-6 m-2"
          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path
              fill-rule="evenodd"
              d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="flex flex-col justify-center">
            <div className="text-md">Dukaan Pay will be deactivated soon!</div>
            <div className="text-sm text-bluegray">
              To continue receiving online payments from your customers, please
              set up a new payment provider. Dukaan Pay will no longer be
              operational from 1 September, 2023.
            </div>
          </div>
          <div>
            <button className="bg-red text-md flex flex-col text-white justify-center rounded-md p-2 ml-28 h-full">
              Set up new payment provider
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
