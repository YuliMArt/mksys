import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [classColor, setClassColor] = useState("bg-cyan-500");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ctgry, setCtgry] = useState("#");
  const handleSetIndex = (index) => {
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex(!index);
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };
  const setColorCl = (color) => {
    setClassColor(color);
    localStorage.setItem("colorModeCl", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentColor,
        classColor,
        currentMode,
        activeMenu,
        activeIndex,
        ctgry,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveIndex,
        setActiveMenu,
        setCtgry,
        setCurrentColor,
        setColorCl,
        setCurrentMode,
        setClassColor,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        handleSetIndex,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
