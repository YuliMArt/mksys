import React, { useContext, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { App } from "./App";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, verificaToken } = useContext(AuthContext);
  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return (
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center space-x-2 w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div >
      <HashRouter>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRoute isAuthenticated={auth.logged}>
                <AuthRouter />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute isAuthenticated={auth.logged}>
                <App />
              </PrivateRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};
