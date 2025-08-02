import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../pages/dashboard";
import Header from "../Components/header";
import { useState } from "react";
import "./App.css";
import Redirecttogithub from "../Components/Redirecttogithub";
import { useContext, createContext } from "react";
import Login from "../pages/login.jsx";
import ProductDetails from "../pages/productdetails";

export const Mycontext = createContext();

function App() {
  const [islogin, setislogin] = useState(false);
  const [hidesidebar, sethidesidebar] = useState(true);
  const [rightsidecomponent, setrightsidecomponent] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const values = {
    islogin,
    setislogin,
    rightsidecomponent,
    setrightsidecomponent,
    hidesidebar,
    sethidesidebar,
  };

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {islogin === false && <Header />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dev" element={<Redirecttogithub />} />
        </Routes>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
