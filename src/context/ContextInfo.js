import React, { createContext, useContext, useEffect, useState } from "react";

const StateContextInfo = createContext();

export const ContextProviderInfo = ({ children }) => {
  const [toastCh, setToast] = useState(false);
  const [dataToas, setDtToas] = useState({
    tipo: "success",
    sms: [
      {
        value: "",
        msg: "El nombre es obligatorio",
        param: "nodo",
        location: "body",
      },
      { value: "", msg: "La ip es obligatoria", param: "ip", location: "body" },
    ],
  });
  const [coords, setCoords] = useState([]);
  const [respuesta, setResp] = useState();
  useEffect(() => {
    loadResp();
  }, [respuesta]);
  const loadResp = () => {
    if (respuesta) {
      if (respuesta.ok) {
        setDtToas({ tipo: "success", sms: [{ ...respuesta }] });
        setToast(true);
      } else if (!respuesta.ok) {
        setDtToas({ tipo: "error", sms: [{ ...respuesta }] });
        setToast(true);
      } else if (respuesta.errors) {
        console.log('commet errors',);
        
        setDtToas({ tipo: "error", sms: respuesta.errors });
        setToast(true);
      } else {
        setDtToas({
          tipo: "error",
          sms: [
            {
              msg: "Ocurrio un error, si el problema persiste ponte en contancto con el administrador",
            },
          ],
        });
        setToast(true);
      }
    }
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContextInfo.Provider
      value={{
        toastCh,
        setDtToas,
        setToast,
        dataToas,
        setCoords,
        coords,
        respuesta,
        setResp,
      }}
    >
      {children}
    </StateContextInfo.Provider>
  );
};

export const useContextInfo = () => useContext(StateContextInfo);
