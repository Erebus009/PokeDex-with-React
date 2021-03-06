import Nav from "./Components/layout/Navbar";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashbaord from "./Components/layout/Dashbaord";
import Pokemon from "./Components/Pokemon/Pokemon"
import {  Routes, Route,HashRouter  } from "react-router-dom";

function App() {
  return (
   
      <HashRouter>
      <div>
        <Nav />
        <div className="container">
          <Routes>
          <Route exact path="/" element= {<Dashbaord/>} />
          <Route   path="/pokemon/:PokeIndex" element= {<Pokemon/>} />
          </Routes>
         
        </div>
      </div>
      </HashRouter>
   
  );
}

export default App;
