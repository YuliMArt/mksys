import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { RoutesApp } from "./RoutesApp";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import { useContextInfo } from "../context/ContextInfo";
import { propsTs } from "../data/cards";
import { Nav } from "../components/main/Nav";
import { FloatTheme } from "../components/main/FloatTheme";
import { SideBar } from "../components/main/SideBar";

export const App = () => {
  const {
    setCurrentColor,
    setClassColor,
    setCurrentMode,
    currentMode,
    activeMenu,
  } = useStateContext();
  const { toastCh, setDtToas, setToast, dataToas, setResp } = useContextInfo();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");
    const currentThemeColor = localStorage.getItem("colorMode");
    const classThemeColor = localStorage.getItem("colorModeCl");
    if (currentThemeColor && currentThemeMode && classThemeColor) {
      setCurrentColor(currentThemeColor);
      setClassColor(classThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  useEffect(() => {
    showToast();
  }, [toastCh, dataToas]);

  const showToast = () => {
    if (toastCh) {
      switch (dataToas.tipo) {
        case "error":
          dataToas.sms.forEach((mj) => {
            toast.error(mj.msg, propsTs);
          });

          break;
        case "success":
          dataToas.sms.forEach((mj) => {
            toast.success(mj.msg, propsTs);
          });
          break;
        case "warning":
          dataToas.sms.forEach((mj) => {
            toast.success(mj.msg, propsTs);
          });
          break;

        default:
          break;
      }
      setDtToas({ tipo: "", sms: [] });
      setToast(false);
      setResp();
    }
  };
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="fixed w-72 sidebar dark:bg-secondary-dark-bg bg-white z-10 ">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <SideBar />
          </div>
        )}
        <div
          className={` ${
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Nav />
          </div>
          <div>
            <RoutesApp />
          </div>
        </div>
      </div>

      <FloatTheme />
      <ToastContainer />
    </div>
  );
};
