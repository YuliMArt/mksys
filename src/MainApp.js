import React from "react";
import moment from "moment";
import "moment/locale/es";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";
import { AuthProvider } from "./auth/AuthContext";
import { AppRouter } from "./router/AppRouter";
import { ContextProviderInfo } from "./context/ContextInfo";
import { SocketProvider } from "./context/SocketContext";

moment.locale("es");
export const MainApp = () => {
  return (
    <ContextProvider>
      {/* <ChatProvider> */}
        <AuthProvider>
          <ContextProviderInfo>
            <SocketProvider>
              <AppRouter />
            </SocketProvider>
          </ContextProviderInfo>
        </AuthProvider>
      {/* </ChatProvider> */}
    </ContextProvider>
  );
};
