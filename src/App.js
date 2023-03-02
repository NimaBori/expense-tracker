import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import AddRecord from "./components/AddRecord";
import { useGlobalContext } from "./components/context";
import ShowTransaction from "./components/ShowTransaction";
import ShowRecords from "./components/ShowRecords";
import Cards from "./components/cards/Cards";
import SiteNavbar from "./components/SiteNavbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/new" element={<AddRecord />} />
        <Route path="/about" element={<About />} />
        {/* <ShowRecords /> */}
      </Routes>
    </Router>
  );
}

export default App;
