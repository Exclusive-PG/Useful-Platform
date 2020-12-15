import React, { useState } from "react";
import "./App.scss";
import DashBoardC from "./Components/MainDashboard/Dashboard_con";
import HeaderC from "./Components/header/headerC";
import { Route } from "react-router-dom";




const App: React.FC = () => {
  debugger;
  return (
    <main className="app_wrapper">
     <HeaderC/>
     <DashBoardC/>
    </main>
  );
};

export default App;
