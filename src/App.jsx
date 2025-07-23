import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../pages/dashboard";
import Header from "../Components/header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
