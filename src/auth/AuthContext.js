import React, { createContext, useCallback, useContext, useState } from "react";
import { fetchConToken, fetchSinToken } from "../api/fetch";
// import { ChatContext } from "../context/chat/ChatContext";
// import { types } from "../types/types";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  user: null,
  email: null,
  foto: null,
  roll: null,
  permisos: null,
  conected: null,
  color: "#82818d",
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  // const { dispatch } = useContext(ChatContext);
  const login = async (user, password) => {
    const resp = await fetchSinToken("auth/login", { user, password }, "POST");
    // console.log(resp);
    if (resp.ok) {
      localStorage.setItem("token", resp.token);

      const { agente } = resp;
      setAuth({
        uid: agente.id_agent,
        checking: false,
        logged: true,
        name: agente.name,
        user: agente.user,
        email: agente.email,
        roll: agente.rol,
        foto: agente.foto,
        permisos: JSON.parse(agente.acceso),
        color: agente.color,
      });
    }

    return resp.ok;
  };

  const verificaToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    // Si token no existe
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        user: null,
        email: null,
        foto: null,
        roll: null,
        permisos: null,
        conected: null,
        color: "#82818d",
      });

      return false;
    }

    const resp = await fetchConToken("auth/renew");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { agente } = resp;

      setAuth({
        uid: agente.id_agent,
        checking: false,
        logged: true,
        name: agente.name,
        user: agente.user,
        email: agente.email,
        roll: agente.rol,
        foto: agente.foto,
        permisos: JSON.parse(agente.acceso),
        color: agente.color,
      });

      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        user: null,
        email: null,
        foto: null,
        roll: null,
        permisos: null,
        conected: null,
        color: "#82818d",
      });

      return false;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    // dispatch({
    //   type: types.cerrarSesion,
    // });
    setAuth({
      uid: null,
      checking: false,
      logged: false,
      name: null,
      user: null,
      email: null,
      foto: null,
      roll: null,
      permisos: null,
      conected: null,
      color: "#82818d",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        verificaToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
