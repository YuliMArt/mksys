import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
export const DashBoard = () => {
  const { auth } = useContext(AuthContext);
  const { permisos } = auth;
  return <div className="container mx-auto px-4 mt-14">
    hola 
  </div>;
};
