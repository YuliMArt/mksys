import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
};
