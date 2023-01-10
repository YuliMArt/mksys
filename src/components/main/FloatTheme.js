import { Tooltip } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { GiPalette } from "react-icons/gi";
import { useStateContext } from "../../context/ContextProvider";

export const FloatTheme = () => {
  const {
    setColor,
    setColorCl,
    setMode,
    currentMode,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  const themeColors = [
    {
      name: "green-theme",
      color: "#0f730f",
      colorcl: "bg-green-700",
    },
    {
      name: "purple-theme",
      color: "#990bb3",
      colorcl: "bg-fuchsia-700",
    },
    {
      name: "red-theme",
      color: "#a50c0f",
      colorcl: "bg-red-700",
    },
    {
      name: "indigo-theme",
      color: "#1E4DB7",
      colorcl: "bg-blue-700",
    },
    {
      color: "#f3540d",
      name: "orange-theme",
      colorcl: "bg-orange-600",
    },
  ];
  const setColores = (c1, c2) => {
    setColor(c1);
    setColorCl(c2);
  };

  return (
    <div data-dial-init className={`fixed group right-6 bottom-6`}>
      {themeSettings && (
        <div
          id="speed-dial-menu-default"
          className=" flex-col items-center mb-4 space-y-2"
        >
          <Tooltip content="Tema oscuro">
            <button
              type="button"
              className="flex justify-center items-center w-[52px] h-[52px] text-white  bg-black rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-black dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                onChange={setMode}
                className="cursor-pointer"
                checked={currentMode === "Dark"}
              />
            </button>
          </Tooltip>
          <Tooltip content="Tema claro">
            <button
              type="button"
              className="flex justify-center items-center w-[52px] h-[52px] text-black  bg-white rounded-full border border-gray-500 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400    focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                className="cursor-pointer"
                onChange={setMode}
                checked={currentMode === "Light"}
              />
            </button>
          </Tooltip>
          {themeColors.map((item, i) => (
            <button
              key={i}
              type="button"
              style={{ backgroundColor: item.color }}
              onClick={() => setColores(item.color, item.colorcl)}
              className="flex justify-center items-center w-[52px] h-[52px] text-white  rounded-full border border-gray-200 shadow-sm   focus:ring-4  focus:outline-none "
            >
              <GiPalette />
              <span className="sr-only">Color</span>
            </button>
          ))}
        </div>
      )}
      <Tooltip content="Tema">
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          onClick={() => setThemeSettings(!themeSettings)}
          className="flex justify-center items-center w-14 h-14 text-white rounded-full focus:ring-4  focus:outline-none "
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 transition-transform group-hover:rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>

          <span className="sr-only">Open actions menu</span>
        </button>
      </Tooltip>
    </div>
  );
};
