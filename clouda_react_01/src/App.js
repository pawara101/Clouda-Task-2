import "./App.css";
import React, { useState, useEffect } from "react";
import PartOne from "./components/PartOne";
import ApiCall from "./components/ApiCall";

function App() {
  return (
    <div>
      <PartOne></PartOne>
      <ApiCall></ApiCall>
    </div>   
  );
};

export default App;
