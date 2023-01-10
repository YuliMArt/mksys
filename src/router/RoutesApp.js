import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      {/* <Route path="/dashboard" element={<DashBoard/>} />
      <Route path="/logs" element={<LogsPg/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/agentes" element={<ListPersonal/>} />
      <Route path="/agente/:id/:id2" element={<OppAgente/>}/>
      <Route path="/estadisticas" element={<GraphPage/>}/>
      <Route path="/ajustes" element={<SettingsPg/>}/>
      <Route path="/cobertura" element={<CoverPg/>}/>
      <Route path="/perfil" element={<PerfilPg/>}/>
      <Route path="*" element={<DashBoard/>} /> */}
    </Routes>
  );
};
