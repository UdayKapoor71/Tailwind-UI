import React from "react";

export const MenuItems = ({ name, icon }) => {
  return (
    <div className="text-white m-3 flex">
      <div>{icon}</div>
      <div className="text-l font-light ml-3">{name}</div>
    </div>
  );
};
