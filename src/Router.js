import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// COMPONENTS
import Home from "./components/home/home";
import Forms from "./components/form/form"
const RouterSetup = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* make routes to all files(home page and form page) */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Form" element={<Forms />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
