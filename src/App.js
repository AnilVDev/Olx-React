import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Signup />} exact path="/signup" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
