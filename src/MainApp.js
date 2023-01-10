import React from "react";
import moment from "moment";
import "moment/locale/es";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";
import { AuthProvider } from "./auth/AuthContext";
import { AppRouter } from "./router/AppRouter";
import { ContextProviderInfo } from "./context/ContextInfo";
import { SocketProvider } from "./context/SocketContext";
import { UsersProvider } from "./context/user/ContextUser";
import { RedProvider } from "./context/connection/ContextRed";

moment.locale("es");
export const MainApp = () => {
  return (
    <ContextProvider>
      <AuthProvider>
        <ContextProviderInfo>
          <RedProvider>
            <UsersProvider>
              <SocketProvider>
                <AppRouter />
              </SocketProvider>
            </UsersProvider>
          </RedProvider>
        </ContextProviderInfo>
      </AuthProvider>
    </ContextProvider>
  );
};
