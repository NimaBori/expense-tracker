import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AddRecord from "./components/AddRecord";
import { useGlobalContext } from "./components/context";
import ShowTransaction from "./components/ShowTransaction";

import Cards from "./components/cards/Cards";

function App() {
  return (
    <div>
      <AddRecord />
      <ShowTransaction />
      <Cards />
    </div>
  );
}

export default App;
