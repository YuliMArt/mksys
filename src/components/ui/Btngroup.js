import React, { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { Dropdown } from "flowbite-react";
import { drop } from "../../data/dataFilter";
export const Btngroup = () => {
  const { currentColor } = useStateContext();

  return (
    <>
      <div className="mt-9 flex">
        <Dropdown label={limit} style={{ background: currentColor }}>
          {drop.map((it) => (
            <Dropdown.Item className="text-center" key={it.li}>
              {it.li} {it.tx}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <div className="flex space-x-2 justify-center ml-2">
          <button
            style={{ background: currentColor }}
            type="button"
            className="inline-block px-3  text-white  leading-tight  rounded "
          >
            <b>+</b> Nuevo
          </button>
        </div>
      </div>
    </>
  );
};
