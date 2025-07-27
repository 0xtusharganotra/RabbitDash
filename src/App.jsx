import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../pages/dashboard";
import Header from "../Components/header";
import { useEffect } from "react";
import "./App.css";
import Redirecttogithub from "../Components/Redirecttogithub";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dev" element={<Redirecttogithub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
