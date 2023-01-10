import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../context/ContextProvider";
import { links } from "../../data/links";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const SideBar = () => {
  const {
    currentColor,
    activeIndex,
    handleSetIndex,
    activeMenu,
    setActiveMenu,
    ctgry,
    setCtgry,
    screenSize,
  } = useStateContext();

  const handleCloseSideBar = (mn) => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
    setCtgry(mn);
  };

  const activeLink =
    "flex items-center px-2 gap-5 pt-3 pb-2.5 rounded-lg  text-white  text-md ";
  const normalLink =
    "flex items-center gap-5 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";
  return (
    <div className="ml-3 h-screen max-w-xs md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <BiNetworkChart /> <span>MikroSys</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10 ">
            {links.map((item, i) => (
              <div key={item.title}>
                {item.to ? (
                  <NavLink
                    to={`/${item.to}`}
                    onClick={() => handleCloseSideBar(item.title)}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {item.icon}
                    <span className="capitalize ">{item.title}</span>
                  </NavLink>
                ) : (
                  <p
                    style={{
                      color: `${
                        activeIndex === i || ctgry === item.title
                          ? currentColor
                          : ""
                      }`,
                    }}
                    onClick={() => handleSetIndex(i)}
                    className={`m-3 mt-4  flex justify-between text-gray-800 dark:text-white  `}
                  >
                    <b className="mr-3 flex ">
                      {item.icon}
                      <span className="capitalize mx-3 ">{item.title} </span>
                    </b>

                    {activeIndex === i ? (
                      <BsChevronUp className="w-4 h-4 ali" />
                    ) : (
                      <BsChevronDown className="w-4  h-4 ali" />
                    )}
                  </p>
                )}
                {item.links.map((link) => (
                  <div key={link.name}>
                    {activeIndex === i && (
                      <NavLink
                        to={`/${link.to}`}
                        onClick={() => handleCloseSideBar(item.title)}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : "",
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {link.icon}
                        <span className="capitalize ">{link.name}</span>
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
