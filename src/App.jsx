import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home_page";
import Services from "./pages/Service_page";
import About_us from "./pages/About_us";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About_us" element={<About_us/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
