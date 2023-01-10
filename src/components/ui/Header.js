import { Tooltip } from "flowbite-react";
import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { TfiReload } from "react-icons/tfi";

export const Header = ({ category, title, callBk, color = "" }) => {
  let { classColor } = useStateContext();
  if (color.length !== 0) {
    classColor = color;
  }
  return (
    <div
      // style={{ backgroundColor: currentColor }}
      className={`p-2 flex justify-between ${classColor} `}
    >
      <p className="text-lg font-extrabold tracking-tight text-white">
        {title}
      </p>

      <button onClick={callBk}>
        <Tooltip content="Reload">
          <TfiReload className="font-bold text-white" />
        </Tooltip>
      </button>
    </div>
  );
};
