import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// COMPONENTS
import Home from "./components/home/home";
import Forms from "./components/form/form";
import Applications from "./components/aplications/applications";

const RouterSetup = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* make routes to all files(home page,form page,apllications) */}
        <Route exact path="/" element={<Home />}  />
        <Route exact path="/Form" element={<Forms />} />
        <Route
          exact
          path="/Applications"
          element={<Applications />}
        />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
