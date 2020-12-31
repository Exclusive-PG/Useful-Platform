import React, { useState } from "react";
import "./App.scss";

import { Route } from "react-router-dom";
import Home from "./Components/Home"
import ToDoList from "./Components/ToDoList/ToDoList";
import Weather from "./Components/weather/Weather";
import Movies from "./Components/MovieDB/Movies";




const App: React.FC = () => {

  return (
    <>



    
     <Route path = "/home" render = {()=><main className="app_wrapper"> <Home/> </main>}></Route> 
  
      <Route path = "/ToDoList" render = {() => <ToDoList/>}></Route>
      <Route path = "/Weather" render = {() => <Weather/>}></Route>
      <Route path = "/TopMovies" render = {() => <Movies/>}></Route>
      </>
  );
};

export default App;
